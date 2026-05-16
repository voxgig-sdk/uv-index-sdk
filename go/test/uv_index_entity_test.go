package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/uv-index-sdk"
	"github.com/voxgig-sdk/uv-index-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestUvIndexEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UvIndex(nil)
		if ent == nil {
			t.Fatal("expected non-nil UvIndexEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := uv_indexBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "uv_index." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set UVINDEX_TEST_UV_INDEX_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		uvIndexRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.uv_index", setup.data)))
		var uvIndexRef01Data map[string]any
		if len(uvIndexRef01DataRaw) > 0 {
			uvIndexRef01Data = core.ToMapAny(uvIndexRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = uvIndexRef01Data

		// LOAD
		uvIndexRef01Ent := client.UvIndex(nil)
		uvIndexRef01MatchDt0 := map[string]any{}
		uvIndexRef01DataDt0Loaded, err := uvIndexRef01Ent.Load(uvIndexRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if uvIndexRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func uv_indexBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "uv_index", "UvIndexTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read uv_index test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse uv_index test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"uv_index01", "uv_index02", "uv_index03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("UVINDEX_TEST_UV_INDEX_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"UVINDEX_TEST_UV_INDEX_ENTID": idmap,
		"UVINDEX_TEST_LIVE":      "FALSE",
		"UVINDEX_TEST_EXPLAIN":   "FALSE",
		"UVINDEX_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["UVINDEX_TEST_UV_INDEX_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["UVINDEX_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["UVINDEX_APIKEY"],
			},
			extra,
		})
		client = sdk.NewUvIndexSDK(core.ToMapAny(mergedOpts))
	}

	live := env["UVINDEX_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["UVINDEX_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

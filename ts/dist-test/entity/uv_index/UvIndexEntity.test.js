"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UvIndexEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when UV_INDEX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('UV_INDEX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.UvIndexSDK.test();
        const ent = testsdk.UvIndex();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.UV_INDEX_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'uv_index.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "fields", "req": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "metadata_created", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "date-time", "name": "metadata_modified", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "notes", "req": false, "short": "Dataset description", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "organization", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "records", "req": false, "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "resource_id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "resources", "req": false, "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "total", "req": false, "short": "Total number of records available", "type": "`$INTEGER`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "uv_index", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "{\"timestamp\":\"2024-07-22T12:00:00\"}", "kind": "query", "name": "filter", "orig": "filter", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 100, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e", "kind": "query", "name": "resource_id", "orig": "resource_id", "reqd": true, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /datastore_search", "json": "{\"operationId\":\"getUVIndex\",\"parameters\":[{\"description\":\"The resource ID for UV Index dataset\",\"in\":\"query\",\"name\":\"resource_id\",\"required\":true,\"schema\":{\"default\":\"d_1b676cd174a9af4704fdb3f9aa58ff5e\",\"type\":\"string\"}},{\"description\":\"Maximum number of records to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"JSON string to filter results by date or datetime\",\"example\":\"{\\\"timestamp\\\":\\\"2024-07-22T12:00:00\\\"}\",\"in\":\"query\",\"name\":\"filters\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"fields\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"records\":{\"items\":{\"properties\":{\"location\":{\"description\":\"Location in Singapore\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the UV index reading\",\"format\":\"date-time\",\"type\":\"string\"},\"uv_index\":{\"description\":\"UV index value\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"resource_id\":{\"example\":\"d_1b676cd174a9af4704fdb3f9aa58ff5e\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of records available\",\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with UV Index data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Resource not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/datastore_search", "segments": [{ "lit": "datastore_search" }], "select": { "exist": ["filter", "limit", "offset", "resource_id"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e", "kind": "query", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /package_show", "json": "{\"operationId\":\"getUVIndexMetadata\",\"parameters\":[{\"description\":\"Dataset identifier\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"default\":\"d_1b676cd174a9af4704fdb3f9aa58ff5e\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"id\":{\"example\":\"d_1b676cd174a9af4704fdb3f9aa58ff5e\",\"type\":\"string\"},\"metadata_created\":{\"example\":\"2024-07-22T00:00:00\",\"format\":\"date-time\",\"type\":\"string\"},\"metadata_modified\":{\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"example\":\"ultraviolet-index-uvi\",\"type\":\"string\"},\"notes\":{\"description\":\"Dataset description\",\"type\":\"string\"},\"organization\":{\"properties\":{\"name\":{\"example\":\"nea\",\"type\":\"string\"},\"title\":{\"example\":\"National Environment Agency\",\"type\":\"string\"}},\"type\":\"object\"},\"resources\":{\"items\":{\"properties\":{\"format\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"example\":\"Ultraviolet Index (UVI)\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset metadata\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Dataset not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/package_show", "segments": [{ "lit": "package_show" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 1 }, { "active": true, "args": { "query": [{ "active": true, "example": "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100", "kind": "query", "name": "sql", "orig": "sql", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /datastore_search_sql", "json": "{\"operationId\":\"searchUVIndexSQL\",\"parameters\":[{\"description\":\"SQL query to execute against the UV Index dataset\",\"example\":\"SELECT * FROM \\\"d_1b676cd174a9af4704fdb3f9aa58ff5e\\\" WHERE timestamp >= '2024-07-22' LIMIT 100\",\"in\":\"query\",\"name\":\"sql\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"fields\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"records\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with query results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid SQL query\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/datastore_search_sql", "segments": [{ "lit": "datastore_search_sql" }], "select": { "exist": ["sql"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "uv_index", "name__orig": "uv_index", "Name": "UvIndex", "name_": "uv_index", "name-": "uv-index", "NAME": "UV_INDEX", "index$": 0 }, { "active": true, "entity": "uv_index", "key$": "BasicUvIndexFlow", "kind": "basic", "name": "BasicUvIndexFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "uv_index_ref01", "srcdatavar": "uv_index_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-uv_index_ref01" } }], "index$": 0 }] }, 'UvIndex');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let uv_index_ref01_data = Object.values(setup.data.existing.uv_index)[0];
        // LOAD
        const uv_index_ref01_ent = client.UvIndex();
        const uv_index_ref01_match_dt0 = {};
        uv_index_ref01_match_dt0.id = uv_index_ref01_data.id;
        const uv_index_ref01_data_dt0 = (await uv_index_ref01_ent.load(uv_index_ref01_match_dt0)).data();
        (0, node_assert_1.default)(uv_index_ref01_data_dt0.id === uv_index_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/uv_index/UvIndexTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.UvIndexSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['uv_index01', 'uv_index02', 'uv_index03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'UV_INDEX_TEST_UV_INDEX_ENTID': idmap,
        'UV_INDEX_TEST_LIVE': 'FALSE',
        'UV_INDEX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['UV_INDEX_TEST_UV_INDEX_ENTID'];
    const live = 'TRUE' === env.UV_INDEX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['UV_INDEX_TEST_UV_INDEX_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.UvIndexSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.UV_INDEX_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=UvIndexEntity.test.js.map
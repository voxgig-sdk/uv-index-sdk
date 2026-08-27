-- UvIndex SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "UvIndex",
      slug = "uv-index",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://data.gov.sg/api/action",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["uv_index"] = {},
      },
    },
    entity = {
      ["uv_index"] = {
        ["fields"] = {
          {
            ["name"] = "fields",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata_created",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata_modified",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Dataset description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "organization",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "records",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "resource_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "resources",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of records available",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "uv_index",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "{\"timestamp\":\"2024-07-22T12:00:00\"}",
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      ["kind"] = "query",
                      ["name"] = "resource_id",
                      ["orig"] = "resource_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/datastore_search",
                ["parts"] = {
                  "datastore_search",
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "limit",
                    "offset",
                    "resource_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/package_show",
                ["parts"] = {
                  "package_show",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100",
                      ["kind"] = "query",
                      ["name"] = "sql",
                      ["orig"] = "sql",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/datastore_search_sql",
                ["parts"] = {
                  "datastore_search_sql",
                },
                ["select"] = {
                  ["exist"] = {
                    "sql",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

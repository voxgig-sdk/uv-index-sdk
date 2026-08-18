# UvIndex SDK configuration

module UvIndexConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "UvIndex",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://data.gov.sg/api/action",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "uv_index" => {},
        },
      },
      "entity" => {
        "uv_index" => {
          "fields" => [
            {
              "name" => "fields",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "metadata_created",
              "type" => "`$STRING`",
            },
            {
              "name" => "metadata_modified",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "organization",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "records",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "resource_id",
              "type" => "`$STRING`",
            },
            {
              "name" => "resources",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "total",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "uv_index",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "{\"timestamp\":\"2024-07-22T12:00:00\"}",
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 100,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                        "kind" => "query",
                        "name" => "resource_id",
                        "orig" => "resource_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/datastore_search",
                  "parts" => [
                    "datastore_search",
                  ],
                  "select" => {
                    "exist" => [
                      "filter",
                      "limit",
                      "offset",
                      "resource_id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.result`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/package_show",
                  "parts" => [
                    "package_show",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.result`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100",
                        "kind" => "query",
                        "name" => "sql",
                        "orig" => "sql",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/datastore_search_sql",
                  "parts" => [
                    "datastore_search_sql",
                  ],
                  "select" => {
                    "exist" => [
                      "sql",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.result`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UvIndexFeatures.make_feature(name)
  end
end

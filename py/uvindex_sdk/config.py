# UvIndex SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "UvIndex",
            "slug": "uv-index",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://data.gov.sg/api/action",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "uv_index": {},
            },
        },
        "entity": {
      "uv_index": {
        "fields": [
          {
            "name": "fields",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "metadata_created",
            "type": "`$STRING`",
          },
          {
            "name": "metadata_modified",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "notes",
            "short": "Dataset description",
            "type": "`$STRING`",
          },
          {
            "name": "organization",
            "type": "`$OBJECT`",
          },
          {
            "name": "records",
            "type": "`$ARRAY`",
          },
          {
            "name": "resource_id",
            "type": "`$STRING`",
          },
          {
            "name": "resources",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "total",
            "short": "Total number of records available",
            "type": "`$INTEGER`",
          },
        ],
        "name": "uv_index",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "{\"timestamp\":\"2024-07-22T12:00:00\"}",
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      "kind": "query",
                      "name": "resource_id",
                      "orig": "resource_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datastore_search",
                "parts": [
                  "datastore_search",
                ],
                "select": {
                  "exist": [
                    "filter",
                    "limit",
                    "offset",
                    "resource_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/package_show",
                "parts": [
                  "package_show",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100",
                      "kind": "query",
                      "name": "sql",
                      "orig": "sql",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datastore_search_sql",
                "parts": [
                  "datastore_search_sql",
                ],
                "select": {
                  "exist": [
                    "sql",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

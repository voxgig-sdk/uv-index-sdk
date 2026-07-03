# UvIndex SDK configuration


def make_config():
    return {
        "main": {
            "name": "UvIndex",
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
            "auth": {
                "prefix": "Bearer",
            },
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
            "active": True,
            "name": "result",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
        ],
        "name": "uv_index",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "{\"timestamp\":\"2024-07-22T12:00:00\"}",
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      "kind": "query",
                      "name": "resource_id",
                      "orig": "resource_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100",
                      "kind": "query",
                      "name": "sql",
                      "orig": "sql",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

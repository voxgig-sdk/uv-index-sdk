
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'UvIndex',
        slug: "uv-index",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://data.gov.sg/api/action",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      uv_index: {
      },

    }
  }


  entity = {
    "uv_index": {
      "fields": [
        {
          "name": "fields",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "metadata_created",
          "type": "`$STRING`"
        },
        {
          "name": "metadata_modified",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "notes",
          "short": "Dataset description",
          "type": "`$STRING`"
        },
        {
          "name": "organization",
          "type": "`$OBJECT`"
        },
        {
          "name": "records",
          "type": "`$ARRAY`"
        },
        {
          "name": "resource_id",
          "type": "`$STRING`"
        },
        {
          "name": "resources",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "total",
          "short": "Total number of records available",
          "type": "`$INTEGER`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                    "kind": "query",
                    "name": "resource_id",
                    "orig": "resource_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/datastore_search",
              "parts": [
                "datastore_search"
              ],
              "select": {
                "exist": [
                  "filter",
                  "limit",
                  "offset",
                  "resource_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              }
            },
            {
              "args": {
                "query": [
                  {
                    "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/package_show",
              "parts": [
                "package_show"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              }
            },
            {
              "args": {
                "query": [
                  {
                    "example": "SELECT * FROM \"d_1b676cd174a9af4704fdb3f9aa58ff5e\" WHERE timestamp >= '2024-07-22' LIMIT 100",
                    "kind": "query",
                    "name": "sql",
                    "orig": "sql",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/datastore_search_sql",
              "parts": [
                "datastore_search_sql"
              ],
              "select": {
                "exist": [
                  "sql"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


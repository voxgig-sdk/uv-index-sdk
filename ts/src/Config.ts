
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://data.gov.sg/api/action',

    auth: {
      prefix: 'Bearer',
    },

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
          "name": "result",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "success",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 1
        }
      ],
      "name": "uv_index",
      "op": {
        "load": {
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": "d_1b676cd174a9af4704fdb3f9aa58ff5e",
                    "kind": "query",
                    "name": "resource_id",
                    "orig": "resource_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 1
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "load"
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


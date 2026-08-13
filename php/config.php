<?php
declare(strict_types=1);

// UvIndex SDK configuration

class UvIndexConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UvIndex",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://data.gov.sg/api/action",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "uv_index" => [],
                ],
            ],
            "entity" => [
        'uv_index' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'fields',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'metadata_created',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'metadata_modified',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'notes',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'organization',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'records',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'resource_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'resources',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'total',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
          ],
          'name' => 'uv_index',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '{"timestamp":"2024-07-22T12:00:00"}',
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'd_1b676cd174a9af4704fdb3f9aa58ff5e',
                        'kind' => 'query',
                        'name' => 'resource_id',
                        'orig' => 'resource_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/datastore_search',
                  'parts' => [
                    'datastore_search',
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'limit',
                      'offset',
                      'resource_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'd_1b676cd174a9af4704fdb3f9aa58ff5e',
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/package_show',
                  'parts' => [
                    'package_show',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'SELECT * FROM "d_1b676cd174a9af4704fdb3f9aa58ff5e" WHERE timestamp >= \'2024-07-22\' LIMIT 100',
                        'kind' => 'query',
                        'name' => 'sql',
                        'orig' => 'sql',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/datastore_search_sql',
                  'parts' => [
                    'datastore_search_sql',
                  ],
                  'select' => [
                    'exist' => [
                      'sql',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return UvIndexFeatures::make_feature($name);
    }
}

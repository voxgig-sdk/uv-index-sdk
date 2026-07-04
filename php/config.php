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
              'name' => 'result',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'success',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
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
                    'res' => '`body`',
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
                    'res' => '`body`',
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
                    'res' => '`body`',
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

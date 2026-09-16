<?php
declare(strict_types=1);

// UvIndex SDK configuration

class UvIndexConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UvIndex",
                "slug" => "uv-index",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'name' => 'fields',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'metadata_created',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'metadata_modified',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'notes',
              'short' => 'Dataset description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'organization',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'records',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'resource_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'resources',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of records available',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'uv_index',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '{"timestamp":"2024-07-22T12:00:00"}',
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
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
                  'segments' => [
                    [
                      'lit' => 'datastore_search',
                    ],
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
                  'parts' => [
                    'datastore_search',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
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
                  'segments' => [
                    [
                      'lit' => 'package_show',
                    ],
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
                  'parts' => [
                    'package_show',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
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
                  'segments' => [
                    [
                      'lit' => 'datastore_search_sql',
                    ],
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
                  'parts' => [
                    'datastore_search_sql',
                  ],
                ],
              ],
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

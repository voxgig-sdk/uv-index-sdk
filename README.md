# UvIndex SDK

Hourly UV index readings for Singapore from data.gov.sg, published between 7am and 7pm

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About UV Index API

The UV Index API exposes ultraviolet index readings for Singapore, served by [data.gov.sg](https://data.gov.sg), Singapore's official open data portal. Readings are produced from the National Environment Agency's monitoring network and surface as hourly values during daylight hours.

What you get from the API:

- Hourly UV index values published between 7am and 7pm local time
- Filtering by `date` or `date_time` query parameters to fetch a specific window
- A timestamped record per reading suitable for plotting trends or feeding alert thresholds

The underlying endpoint is hosted at `https://api-open.data.gov.sg/v2/real-time/api/uv`. CORS is enabled, and no API key or authentication is documented for this endpoint. Rate limits are not publicly stated, so be considerate when polling.

## Try it

**TypeScript**
```bash
npm install uv-index
```

**Python**
```bash
pip install uv-index-sdk
```

**PHP**
```bash
composer require voxgig/uv-index-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/uv-index-sdk/go
```

**Ruby**
```bash
gem install uv-index-sdk
```

**Lua**
```bash
luarocks install uv-index-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { UvIndexSDK } from 'uv-index'

const client = new UvIndexSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o uv-index-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "uv-index": {
      "command": "/abs/path/to/uv-index-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **UvIndex** | Hourly ultraviolet index readings for Singapore, returned from the real-time UV endpoint (`/v2/real-time/api/uv`) with optional `date` or `date_time` filters. | `/datastore_search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from uvindex_sdk import UvIndexSDK

client = UvIndexSDK({})


# Load a specific uvindex
uvindex, err = client.UvIndex(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'uvindex_sdk.php';

$client = new UvIndexSDK([]);


// Load a specific uvindex
[$uvindex, $err] = $client->UvIndex(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/uv-index-sdk/go"

client := sdk.NewUvIndexSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "UvIndex_sdk"

client = UvIndexSDK.new({})


# Load a specific uvindex
uvindex, err = client.UvIndex(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("uv-index_sdk")

local client = sdk.new({})


-- Load a specific uvindex
local uvindex, err = client:UvIndex(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = UvIndexSDK.test()
const result = await client.UvIndex().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = UvIndexSDK.test(None, None)
result, err = client.UvIndex(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = UvIndexSDK::test(null, null);
[$result, $err] = $client->UvIndex(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.UvIndex(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = UvIndexSDK.test(nil, nil)
result, err = client.UvIndex(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:UvIndex(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the UV Index API

- Upstream: [https://data.gov.sg](https://data.gov.sg)
- API docs: [https://data.gov.sg/datasets](https://data.gov.sg/datasets)

- Data is published under the **Singapore Open Data Licence** by the Government of Singapore.
- Free to use, share, and adapt for any purpose, including commercial use.
- Attribution to the source agency (data.gov.sg) is required.
- Provided on an "as-is" basis; check the official terms at data.gov.sg before relying on it for critical applications.

---

Generated from the UV Index API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

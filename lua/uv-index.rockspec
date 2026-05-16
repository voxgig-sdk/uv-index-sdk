package = "voxgig-sdk-uv-index"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/uv-index-sdk.git"
}
description = {
  summary = "UvIndex SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["uv-index_sdk"] = "uv-index_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

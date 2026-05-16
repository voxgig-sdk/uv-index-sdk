-- UvIndex SDK error

local UvIndexError = {}
UvIndexError.__index = UvIndexError


function UvIndexError.new(code, msg, ctx)
  local self = setmetatable({}, UvIndexError)
  self.is_sdk_error = true
  self.sdk = "UvIndex"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UvIndexError:error()
  return self.msg
end


function UvIndexError:__tostring()
  return self.msg
end


return UvIndexError

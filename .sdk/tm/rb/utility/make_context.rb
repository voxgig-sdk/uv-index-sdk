# UvIndex SDK utility: make_context
require_relative '../core/context'
module UvIndexUtilities
  MakeContext = ->(ctxmap, basectx) {
    UvIndexContext.new(ctxmap, basectx)
  }
end

# UvIndex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UvIndexFeatures
  def self.make_feature(name)
    case name
    when "base"
      UvIndexBaseFeature.new
    when "ratelimit"
      UvIndexRatelimitFeature.new
    when "retry"
      UvIndexRetryFeature.new
    when "test"
      UvIndexTestFeature.new
    when "timeout"
      UvIndexTimeoutFeature.new
    else
      UvIndexBaseFeature.new
    end
  end
end

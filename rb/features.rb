# UvIndex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UvIndexFeatures
  def self.make_feature(name)
    case name
    when "base"
      UvIndexBaseFeature.new
    when "test"
      UvIndexTestFeature.new
    else
      UvIndexBaseFeature.new
    end
  end
end

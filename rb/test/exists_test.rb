# UvIndex SDK exists test

require "minitest/autorun"
require_relative "../UvIndex_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = UvIndexSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

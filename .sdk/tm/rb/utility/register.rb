# UvIndex SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UvIndexUtility.registrar = ->(u) {
  u.clean = UvIndexUtilities::Clean
  u.done = UvIndexUtilities::Done
  u.make_error = UvIndexUtilities::MakeError
  u.feature_add = UvIndexUtilities::FeatureAdd
  u.feature_hook = UvIndexUtilities::FeatureHook
  u.feature_init = UvIndexUtilities::FeatureInit
  u.fetcher = UvIndexUtilities::Fetcher
  u.make_fetch_def = UvIndexUtilities::MakeFetchDef
  u.make_context = UvIndexUtilities::MakeContext
  u.make_options = UvIndexUtilities::MakeOptions
  u.make_request = UvIndexUtilities::MakeRequest
  u.make_response = UvIndexUtilities::MakeResponse
  u.make_result = UvIndexUtilities::MakeResult
  u.make_point = UvIndexUtilities::MakePoint
  u.make_spec = UvIndexUtilities::MakeSpec
  u.make_url = UvIndexUtilities::MakeUrl
  u.param = UvIndexUtilities::Param
  u.prepare_auth = UvIndexUtilities::PrepareAuth
  u.prepare_body = UvIndexUtilities::PrepareBody
  u.prepare_headers = UvIndexUtilities::PrepareHeaders
  u.prepare_method = UvIndexUtilities::PrepareMethod
  u.prepare_params = UvIndexUtilities::PrepareParams
  u.prepare_path = UvIndexUtilities::PreparePath
  u.prepare_query = UvIndexUtilities::PrepareQuery
  u.result_basic = UvIndexUtilities::ResultBasic
  u.result_body = UvIndexUtilities::ResultBody
  u.result_headers = UvIndexUtilities::ResultHeaders
  u.transform_request = UvIndexUtilities::TransformRequest
  u.transform_response = UvIndexUtilities::TransformResponse
}

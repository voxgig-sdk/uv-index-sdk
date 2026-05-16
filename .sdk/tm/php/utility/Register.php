<?php
declare(strict_types=1);

// UvIndex SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UvIndexUtility::setRegistrar(function (UvIndexUtility $u): void {
    $u->clean = [UvIndexClean::class, 'call'];
    $u->done = [UvIndexDone::class, 'call'];
    $u->make_error = [UvIndexMakeError::class, 'call'];
    $u->feature_add = [UvIndexFeatureAdd::class, 'call'];
    $u->feature_hook = [UvIndexFeatureHook::class, 'call'];
    $u->feature_init = [UvIndexFeatureInit::class, 'call'];
    $u->fetcher = [UvIndexFetcher::class, 'call'];
    $u->make_fetch_def = [UvIndexMakeFetchDef::class, 'call'];
    $u->make_context = [UvIndexMakeContext::class, 'call'];
    $u->make_options = [UvIndexMakeOptions::class, 'call'];
    $u->make_request = [UvIndexMakeRequest::class, 'call'];
    $u->make_response = [UvIndexMakeResponse::class, 'call'];
    $u->make_result = [UvIndexMakeResult::class, 'call'];
    $u->make_point = [UvIndexMakePoint::class, 'call'];
    $u->make_spec = [UvIndexMakeSpec::class, 'call'];
    $u->make_url = [UvIndexMakeUrl::class, 'call'];
    $u->param = [UvIndexParam::class, 'call'];
    $u->prepare_auth = [UvIndexPrepareAuth::class, 'call'];
    $u->prepare_body = [UvIndexPrepareBody::class, 'call'];
    $u->prepare_headers = [UvIndexPrepareHeaders::class, 'call'];
    $u->prepare_method = [UvIndexPrepareMethod::class, 'call'];
    $u->prepare_params = [UvIndexPrepareParams::class, 'call'];
    $u->prepare_path = [UvIndexPreparePath::class, 'call'];
    $u->prepare_query = [UvIndexPrepareQuery::class, 'call'];
    $u->result_basic = [UvIndexResultBasic::class, 'call'];
    $u->result_body = [UvIndexResultBody::class, 'call'];
    $u->result_headers = [UvIndexResultHeaders::class, 'call'];
    $u->transform_request = [UvIndexTransformRequest::class, 'call'];
    $u->transform_response = [UvIndexTransformResponse::class, 'call'];
});

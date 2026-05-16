<?php
declare(strict_types=1);

// UvIndex SDK utility: result_headers

class UvIndexResultHeaders
{
    public static function call(UvIndexContext $ctx): ?UvIndexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

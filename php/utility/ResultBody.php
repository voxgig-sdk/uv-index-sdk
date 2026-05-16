<?php
declare(strict_types=1);

// UvIndex SDK utility: result_body

class UvIndexResultBody
{
    public static function call(UvIndexContext $ctx): ?UvIndexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

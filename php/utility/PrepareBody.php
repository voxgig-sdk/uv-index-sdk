<?php
declare(strict_types=1);

// UvIndex SDK utility: prepare_body

class UvIndexPrepareBody
{
    public static function call(UvIndexContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

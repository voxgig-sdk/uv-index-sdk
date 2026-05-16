<?php
declare(strict_types=1);

// UvIndex SDK utility: feature_add

class UvIndexFeatureAdd
{
    public static function call(UvIndexContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

<?php
declare(strict_types=1);

// UvIndex SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UvIndexMakeContext
{
    public static function call(array $ctxmap, ?UvIndexContext $basectx): UvIndexContext
    {
        return new UvIndexContext($ctxmap, $basectx);
    }
}

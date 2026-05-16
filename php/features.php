<?php
declare(strict_types=1);

// UvIndex SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UvIndexFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UvIndexBaseFeature();
            case "test":
                return new UvIndexTestFeature();
            default:
                return new UvIndexBaseFeature();
        }
    }
}

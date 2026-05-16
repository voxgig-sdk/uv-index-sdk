<?php
declare(strict_types=1);

// UvIndex SDK exists test

require_once __DIR__ . '/../uvindex_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UvIndexSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

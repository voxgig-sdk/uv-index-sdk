<?php
declare(strict_types=1);

// UvIndex SDK base feature

class UvIndexBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UvIndexContext $ctx, array $options): void {}
    public function PostConstruct(UvIndexContext $ctx): void {}
    public function PostConstructEntity(UvIndexContext $ctx): void {}
    public function SetData(UvIndexContext $ctx): void {}
    public function GetData(UvIndexContext $ctx): void {}
    public function GetMatch(UvIndexContext $ctx): void {}
    public function SetMatch(UvIndexContext $ctx): void {}
    public function PrePoint(UvIndexContext $ctx): void {}
    public function PreSpec(UvIndexContext $ctx): void {}
    public function PreRequest(UvIndexContext $ctx): void {}
    public function PreResponse(UvIndexContext $ctx): void {}
    public function PreResult(UvIndexContext $ctx): void {}
    public function PreDone(UvIndexContext $ctx): void {}
    public function PreUnexpected(UvIndexContext $ctx): void {}
}

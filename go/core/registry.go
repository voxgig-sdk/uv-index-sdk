package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewUvIndexEntityFunc func(client *UvIndexSDK, entopts map[string]any) UvIndexEntity


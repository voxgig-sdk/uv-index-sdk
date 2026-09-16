# UvIndex SDK feature factory

from uvindex_sdk.feature.base_feature import UvIndexBaseFeature
from uvindex_sdk.feature.ratelimit_feature import UvIndexRatelimitFeature
from uvindex_sdk.feature.retry_feature import UvIndexRetryFeature
from uvindex_sdk.feature.test_feature import UvIndexTestFeature
from uvindex_sdk.feature.timeout_feature import UvIndexTimeoutFeature


_FEATURES = {
    "base": lambda: UvIndexBaseFeature(),
    "ratelimit": lambda: UvIndexRatelimitFeature(),
    "retry": lambda: UvIndexRetryFeature(),
    "test": lambda: UvIndexTestFeature(),
    "timeout": lambda: UvIndexTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

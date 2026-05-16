# UvIndex SDK feature factory

from feature.base_feature import UvIndexBaseFeature
from feature.test_feature import UvIndexTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UvIndexBaseFeature(),
        "test": lambda: UvIndexTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

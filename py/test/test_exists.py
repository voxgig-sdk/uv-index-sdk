# ProjectName SDK exists test

import pytest
from uvindex_sdk import UvIndexSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UvIndexSDK.test(None, None)
        assert testsdk is not None

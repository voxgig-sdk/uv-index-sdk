
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UvIndexSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UvIndexSDK.test()
    equal(null !== testsdk, true)
  })

})

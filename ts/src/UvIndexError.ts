
import { Context } from './Context'


class UvIndexError extends Error {

  isUvIndexError = true

  sdk = 'UvIndex'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UvIndexError
}


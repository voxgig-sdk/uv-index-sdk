# UvIndex SDK utility: make_context

from core.context import UvIndexContext


def make_context_util(ctxmap, basectx):
    return UvIndexContext(ctxmap, basectx)

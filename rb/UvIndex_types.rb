# frozen_string_literal: true

# Typed models for the UvIndex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# UvIndex entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
UvIndex = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Match filter for UvIndex#load (any subset of UvIndex fields).
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
UvIndexLoadMatch = Struct.new(
  :result,
  :success,
  keyword_init: true
)


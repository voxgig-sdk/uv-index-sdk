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
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] metadata_created
#   @return [String, nil]
#
# @!attribute [rw] metadata_modified
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] records
#   @return [Array, nil]
#
# @!attribute [rw] resource_id
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
UvIndex = Struct.new(
  :fields,
  :id,
  :metadata_created,
  :metadata_modified,
  :name,
  :notes,
  :organization,
  :records,
  :resource_id,
  :resources,
  :title,
  :total,
  keyword_init: true
)

# Request payload for UvIndex#load.
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata_created
#   @return [String, nil]
#
# @!attribute [rw] metadata_modified
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] records
#   @return [Array, nil]
#
# @!attribute [rw] resource_id
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
UvIndexLoadMatch = Struct.new(
  :fields,
  :id,
  :metadata_created,
  :metadata_modified,
  :name,
  :notes,
  :organization,
  :records,
  :resource_id,
  :resources,
  :title,
  :total,
  keyword_init: true
)


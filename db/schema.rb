# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_10_091939) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bottoms", force: :cascade do |t|
    t.string "color"
    t.string "type"
    t.string "sex"
    t.boolean "isCasual"
    t.boolean "isBC"
    t.boolean "isBusiness"
    t.boolean "isSpring"
    t.boolean "isSummer"
    t.boolean "isFall"
    t.boolean "isWinter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "onepieces", force: :cascade do |t|
    t.string "color"
    t.string "type"
    t.string "sex"
    t.boolean "isCasual"
    t.boolean "isBC"
    t.boolean "isBusiness"
    t.boolean "isSpring"
    t.boolean "isSummer"
    t.boolean "isFall"
    t.boolean "isWinter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patterns", force: :cascade do |t|
    t.string "sex"
    t.string "type1"
    t.string "color1"
    t.string "type2"
    t.string "color2"
    t.string "type3"
    t.string "color3"
    t.string "type4"
    t.string "color4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "style"
  end

  create_table "tops", force: :cascade do |t|
    t.string "color"
    t.string "type"
    t.string "sex"
    t.boolean "isCasual"
    t.boolean "isBC"
    t.boolean "isBusiness"
    t.boolean "isSpring"
    t.boolean "isSummer"
    t.boolean "isFall"
    t.boolean "isWinter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

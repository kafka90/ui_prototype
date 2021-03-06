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

ActiveRecord::Schema.define(version: 20160822060034) do

  create_table "additives", force: :cascade do |t|
    t.string   "name"
    t.string   "english"
    t.text     "information"
    t.integer  "checklist_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string   "car_id"
    t.integer  "trip_num"
    t.string   "name",       default: ""
    t.string   "period",     default: ""
    t.string   "image",      default: ""
    t.string   "visited",    default: ""
    t.integer  "rating",     default: 0
    t.text     "content",    default: ""
    t.integer  "like_num",   default: 0
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "checklists", force: :cascade do |t|
    t.string   "title"
    t.integer  "additive_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "car_id",      default: ""
    t.integer  "trip_num",    default: 0
    t.float    "latitude"
    t.float    "longitude"
    t.string   "address"
    t.string   "title"
    t.text     "description"
    t.integer  "song"
    t.integer  "movie"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "registers", force: :cascade do |t|
    t.string   "title"
    t.integer  "additive_id"
    t.string   "name"
    t.string   "english"
    t.text     "information"
    t.integer  "checklist_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "replies", force: :cascade do |t|
    t.string   "writer"
    t.string   "writer_email"
    t.integer  "article_id"
    t.string   "contents"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "replystatuses", force: :cascade do |t|
    t.integer  "reply_id"
    t.integer  "user_id"
    t.integer  "share_count"
    t.integer  "evaluation_count"
    t.boolean  "liked",            default: false
    t.boolean  "selected",         default: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  create_table "spots", force: :cascade do |t|
    t.string   "si_do"
    t.string   "gu_gun"
    t.string   "name"
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "phone"
    t.string   "homepage"
    t.text     "content01"
    t.text     "content02"
    t.text     "content03"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statuses", force: :cascade do |t|
    t.integer  "article_id"
    t.integer  "user_id"
    t.boolean  "liked",      default: false
    t.boolean  "selected",   default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",  null: false
    t.string   "encrypted_password",     default: "",  null: false
    t.string   "name",                   default: "",  null: false
    t.string   "car_type",               default: "",  null: false
    t.string   "car_id",                 default: "",  null: false
    t.string   "article_like",           default: "0", null: false
    t.integer  "favorite02",             default: 0,   null: false
    t.integer  "favorite03",             default: 0,   null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,   null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

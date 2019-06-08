class Types::AlbumType < Types::BaseObject
  field :id,           ID,                      null: false
  field :name,         String,                  null: false
  field :created_at,   String,                  null: true
  field :updated_at,   String,                  null: true
  field :album_images, [Types::AlbumImageType], null: true
  field :test,         String,                  null: true
end

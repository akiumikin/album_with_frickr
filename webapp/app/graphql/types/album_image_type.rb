class Types::AlbumImageType < Types::BaseObject
    field :id,          ID,       null: false
    field :url,         String,   null: false
    field :created_at,  String,   null: true
    field :updated_at,  String,   null: true
  end
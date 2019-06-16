class Types::AlbumType < Types::BaseObject
  # base_object.rbのようにメタプロしてあげると↓みたいにもかける
  # 一般的な使い方に慣れたいのでコメントアウト
  # model Album
  # preload %i[album_images]

  def album_images
    AssociationLoader.for(Album, :album_images).load(object)
  end

  field :id,           ID,                      null: false
  field :name,         String,                  null: false
  field :created_at,   String,                  null: true
  field :updated_at,   String,                  null: true
  field :album_images, [Types::AlbumImageType], null: true
  field :test,         String,                  null: true
end

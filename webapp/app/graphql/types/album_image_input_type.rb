class Types::AlbumImageInputType < Types::BaseInputObject
  graphql_name 'AlbumImageInputType'
  description  'アルバム画像のCRUD用のInputType'

  argument :id,  ID,     required: false
  argument :url, String, required: true, description: '画像のURL'
end
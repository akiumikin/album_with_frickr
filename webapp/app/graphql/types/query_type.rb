module Types
  class QueryType < Types::BaseObject
    field :album, Types::AlbumType, null: false, description: 'アルバム' do
      argument :id, Integer, required: true
    end

    field :album_list, [Types::AlbumType], null: false, description: 'アルバム一覧'

    def album(id:)
      Album.find_by(id: id)
    end

    def album_list()
      Album.all
    end
  end
end

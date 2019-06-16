module Types
  class MutationType < Types::BaseObject
    field :album_crud, mutation: Mutations::AlbumCrud, null: false
  end
end

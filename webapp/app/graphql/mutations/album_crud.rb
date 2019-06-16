
class Mutations::AlbumCrud < Mutations::BaseMutation
  description 'アルバムおよび画像の作成・更新・削除を行う'

  # 作成用メソッドの引数
  argument :id,     ID,                           required: false
  argument :type,   String,                       required: true,  description: 'CREATE, UPDATE, DELETEのいづれか'
  argument :name,   String,                       required: true,  description: 'アルバム名'
  # imageも合わせて更新する場合のみ必要
  argument :images, [Types::AlbumImageInputType], required: false, description: 'アルバムと一緒に保存する画像'

  # responseのfield
  field  :res_code, Integer,          null: true, description: 'レスポンスコード'
  field  :album,    Types::AlbumType, null: true, description: '変更内容の戻り値'
  
  def resolve(name:, type:, images: nil)
    if type == 'CREATE'
      album = nil
      ActiveRecord::Base.transaction do
        album = Album.create!(name: name)
        album.create_images(images)
      end
    end
    {
      album: album.reload,
      res_code: album.present? ? 200 : 500
    }
  end
end
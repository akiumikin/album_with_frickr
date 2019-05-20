class CreateAlbumImages < ActiveRecord::Migration[5.2]
  def change
    create_table :album_images do |t|
      t.references :album, null: false, foreign_key: true
      t.text :url

      t.timestamps
    end
  end
end

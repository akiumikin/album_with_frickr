class Album < ApplicationRecord
  has_many :album_images, dependent: :destroy
end

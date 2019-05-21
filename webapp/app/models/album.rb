class Album < ApplicationRecord
  has_many :album_images, dependent: :destroy

  # 流石にアルバム名は必須でいいと思う
  validates :name, presence: true, length: { in: 1..255 }
end

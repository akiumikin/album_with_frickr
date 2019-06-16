class Album < ApplicationRecord
  has_many :album_images, dependent: :destroy

  # 流石にアルバム名は必須でいいと思う
  validates :name, presence: true, length: { in: 1..255 }

  # 引用元でtransactionを貼ること
  def create_images(images = nil)
    return if images.nil?

    images.each do |image|
      self.album_images.create!(url: image.url)
    end
  end
end

class AlbumImage < ApplicationRecord
  belongs_to :album

  # urlにバリデーションを加えてもいいが
  # uiの動線的にpostやputを捏造しないとこない
  # ＋fickerのurlかの判定するほど価値があるか微妙なので保留
end

# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bonus?     :boolean          not null
#  lyrics     :text
#
class Track < ApplicationRecord
  validates :title, :ord, :album_id, presence: true
  validates :title, uniqueness: {scope: :album_id}
  validates :bonus?, inclusion: [true, false]

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

  has_one :band,
    through: :album,
    source: :band

  has_many :band_albums,
    through: :band,
    source: :albums
end

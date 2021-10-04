# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  short_url  :string
#  long_url   :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true
  validates :user_id, presence: true
  validates :short_url, uniqueness: true

  # * Associations
  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :shortened_id,
    class_name: :Visit

  has_many :visitors,
    -> { distinct },
    through: :visits,
    source: :visitor

  # * Class Methods
  def num_clicks
    self.visits.count
  end

  def num_uniques
    self.visitors.count

  end

  def num_recent_uniques
    self.visits
    .select(:user_id)
    .where(created_at: 10.minutes.ago..Time.now)
    .distinct
    .count
  end

  # * Factory methods
  def self.shorten(user, long_url)
    ShortenedUrl.new(
      user_id: user.id,
      long_url: long_url, 
      short_url: ShortenedUrl.random_code)
    .save
  end

  def self.random_code
    sr = SecureRandom::urlsafe_base64
    until !ShortenedUrl.exists?(short_url: sr)
      sr = SecureRandom::urlsafe_base64
    end
    sr
  end
end

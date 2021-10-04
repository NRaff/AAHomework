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
  validate :no_spamming

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

  has_many :taggings,
    primary_key: :id,
    foreign_key: :shurl_id,
    class_name: :Tagging

  has_many :tag_topics,
    -> { distinct },
    through: :taggings,
    source: :tag_topic


  # * Instance Methods
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

  private
  def no_spamming
    num_submissions = ShortenedUrl
      .where("user_id = ?", user_id)
      .where(created_at: 1.minutes.ago..Time.now)
      .count
    p num_submissions
    # num_submissions = 
    #   submitter
    #   .joins(:submitted_urls)
    #   .where(created_at: 1.minutes.ago..Time.now)
    #   .select("COUNT(shortened_url.id) as num_submissions")
    if num_submissions > 5
      errors[:base] << "Can\'t submit more than 5 urls in a minute"
      return self
    end
  end

  def nonpremium_max
    
  end
end

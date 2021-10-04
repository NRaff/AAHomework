# == Schema Information
#
# Table name: tag_topics
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TagTopic < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :tags,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Tagging

  has_many :links,
    through: :tags,
    source: :url

  def popular_links
    links
    .joins(:visits)
    .group("shortened_urls.short_url, shortened_urls.long_url")
    .select("shortened_urls.short_url, COUNT(visits.id) num_visits")
    .order("COUNT(visits.id) DESC")
    .limit(5)
  end

end

# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  topic_id   :integer          not null
#  shurl_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tagging < ApplicationRecord
  validates :topic_id, presence: true
  validates :shurl_id, presence: true

  belongs_to :tag_topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :TagTopic

  belongs_to :url,
    primary_key: :id,
    foreign_key: :shurl_id,
    class_name: :ShortenedUrl
end

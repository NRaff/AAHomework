# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  birth_date  :date             not null
#  color       :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'

class Cat < ApplicationRecord
  VALID_COLORS = ['Red','Blue','Green']

  include ActionView::Helpers::DateHelper
  validates :name, :birth_date, :color, :sex, :description, presence: true
  validates :color, inclusion: { in: VALID_COLORS }
  validates :sex, inclusion: { in: %w(M F) }, length: {is: 1}

  def age
    # debugger
    time_ago_in_words(self.birth_date).capitalize
  end

  has_many :rental_requests,
    foreign_key: :cat_id,
    class_name: :CatRentalRequest,
    dependent: :destroy

end

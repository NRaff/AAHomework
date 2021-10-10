# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CatRentalRequest < ApplicationRecord
  VALID_STATUSES = ['PENDING', 'APPROVED', 'DENIED']
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: {in: VALID_STATUSES }
  validate :does_not_overlap_approved_request

  belongs_to :cat,
    foreign_key: :cat_id,
    class_name: :Cat,
    dependent: :destroy


  private
  def overlapping_requests
    CatRentalRequest
      .where.not("end_date < ?", self.start_date)
      .or(CatRentalRequest.where.not("start_date > ?", self.end_date))
      .where(cat_id: self.cat_id)
      .where(status: 'APPROVED')
      .where.not(id: self.id)
  end

  def does_not_overlap_approved_request
    overlapping_requests.exists?
  end
end

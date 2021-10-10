class CatRentalRequestsController < ApplicationController
  def index
    @rent_requests = CatRentalRequest.all.includes(:cat).order(:start_date)
    render :index

  end

  def show

  end

  def new
    @rent_req = CatRentalRequest.new
    render :new

  end

  def create

  end

  def edit
    @rent_req = get_rent_request
    render :edit

  end

  def update

  end

  def destroy

  end

  private
  def get_rent_request
    CatRentalRequest.find(params[:id])
  end

  def rent_req_params
    params.require(:rent_request).permit(:start_date, :end_date)
  end

end

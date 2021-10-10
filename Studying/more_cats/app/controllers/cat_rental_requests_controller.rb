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
    @rent_req = CatRentalRequest.new(rent_req_params)

    if @rent_req.save
      redirect_to cat_url(@rent_req.cat_id)
    else
      render json: @rent_req.errors.full_messages
    end

  end

  def edit
    @rent_req = get_rent_request
    render :edit

  end

  def update
    @rent_req = get_rent_request
    if @rent_req.update(rent_req_params)
      redirect_to cat_url(@rent_req.cat_id)
    else
      render json: @rent_req.errors.full_messages
    end
  end

  def destroy
    @rent_req = get_rent_request
    @rent_req.destroy
    redirect_to cat_url(@rent_req.cat_id)
  end

  def approve
    @rent_req = get_rent_request
    if @rent_req.approve!
      redirect_to cat_url(@rent_req.cat_id)
    else
      render json: @rent_req.errors.full_messages
    end
  end

  def deny
    @rent_req = get_rent_request
    if @rent_req.deny!
      redirect_to cat_url(@rent_req.cat_id)
    else
      render json: @rent_req.errors.full_messages
    end
  end

  private
  def get_rent_request
    CatRentalRequest.find(params[:id])
  end

  def rent_req_params
    params.require(:rent_request).permit(:start_date, :end_date, :status, :cat_id)
  end

end

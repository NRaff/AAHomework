class BandsController < ApplicationController
  def new
    @band = Band.new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      flash[:messages] = ["Successfully created a band"]
      redirect_to bands_url
    else
      flash.now[:errors] = @band.erros.full_messages
      render :new
    end
  end

  def show
    @band = get_band
    render :show
  end

  def index
    @bands = Band.all
    render :index
  end

  def destroy
    @band = get_band
    @band.destroy
    flash[:messages] = "Deleted #{@band.name}"
    redirect_to bands_url
  end

  def get_band
    Band.find(params[:id])
  end

  def band_params
    params.require(:band).permit(:name)
  end
end

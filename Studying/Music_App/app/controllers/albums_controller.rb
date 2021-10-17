class AlbumsController < ApplicationController
  def new
    @album = Album.new
    @album.band_id = [params[:band_id]]
    @bands = Band.all
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      flash[:messages] = ["Successfully created #{@album.title} for #{@album.band.name}"]
      redirect_to band_albums_url(@album.band_id)
    else
      flash.now[:errors] = @album.errors.full_messages
      @bands = Band.all
      render :new
    end
  end

  def destroy
    @album = get_album
    @album.destroy
    flash[:messages] = ["Successfully deleted #{@album.band.name}'s album: #{@album.title}"]
    redirect_to band_albums_url(@album.band_id)
  end

  def show
    @album = get_album
    render :show
  end

  def index
    @band = get_band
    @albums = @band.albums
    render :index
  end

  def album_params
    params.require(:album).permit(:title, :year, :live?, :band_id)
  end

  def get_album
    Album.find(params[:id])
  end

  def get_band
    Band.find(params[:band_id])
  end
end

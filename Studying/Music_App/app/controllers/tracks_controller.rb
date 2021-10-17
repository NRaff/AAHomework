class TracksController < ApplicationController
  def new
    @track = Track.new
    @track.album_id = params[:album_id]
    @albums = get_albums(@track)
    render :new
  end

  def create
    @track = Track.new(track_params)
    # @track.album_id = params[:album_id]
    if @track.save
      flash[:messages] = ["Successfully create a new track"]
      redirect_to album_url(@track.album_id)
    else
      flash.now[:errors] = @track.errors.full_messages
      get_albums(@track)
      render :new
    end
  end

  def destroy
    @track = get_track
    @track.destroy
    flash[:messages] = "Successfully deleted #{@track.title} from #{@track.album.title}"
    redirect_to album_url(@track.album_id)
  end

  def edit
    @track = get_track
    @album = @track.album
    get_albums(@track)
    render :edit
  end

  def update
    @track = get_track
    if @track.update(track_params)
      flash[:messages] = ["Successfully updated track"]
      redirect_to album_url(@track.album_id)
    else
      flash.now[:errors] = @track.errors.full_messages
      get_albums(@track)
      render :edit
    end
  end

  def show
    @track = get_track
    render :show
  end

  def get_track
    Track.find(params[:id])
  end

  def track_params
    params.require(:track).permit(:title, :ord, :bonus?, :lyrics, :album_id)
  end

  def get_albums(track)
    @albums = track.band_albums
  end
end

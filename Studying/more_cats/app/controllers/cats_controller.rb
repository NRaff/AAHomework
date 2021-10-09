class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @spec_cat = get_cat
    render :show
  end

  def create
    @spec_cat = Cat.new(cat_params)
    if @spec_cat.save
      redirect_to :show
    else
      render 'error', error: @spec_cat.errors.full_messages
    end
  end

  def new
    @spec_cat = Cat.new
    render :new
  end

  def edit
    @spec_cat = get_cat
    render :edit
  end

  def update

  end

  def destroy
    @spec_cat = get_cat
    @spec_cat.destroy
    # this probably won't work 
    # because show will request the already delete spec_cat
    redirect_to :show
  end

  private
  def get_cat
    Cat.find(params[:id])
  end
  def cat_params
    params.require(:cat).permit(:name, :birth_date, :color, :sex, :description)
  end
end

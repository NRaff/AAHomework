class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:messages] = ["Successfully created an account!"]
      redirect_to users_url # probably alter this redirect later
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = get_user
    render :edit
  end

  def update
    @user = get_user
    if @user.update(user_params)
      flash[:messages] = ["Successfully update your information!"]
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @user = get_user
    @user.destroy
    flash[:messages] = ["Deleted #{@user.username}"]
    redirect_to users_url
  end

  def show
    @user = get_user
    render :show
  end

  def index
    @users = User.all
    render :index
  end

end

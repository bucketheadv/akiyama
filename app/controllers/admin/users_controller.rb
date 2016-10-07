class Admin::UsersController < AdminController
  before_action :set_user, only: [:edit, :update, :show, :destroy]
  before_action :set_roles, only: [:edit, :update, :new, :create]
  def index
    @count = params[:count] || 10
    @users = User.page(params[:page]).per(@count)
    @dataSource = ActiveModel::Serializer::CollectionSerializer.new(@users, each_serializer:UserSerializer)
  end

  def new
    @user = User.new
    @role_ids = []
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.save_roles(role_ids)
      flash[:success] = 'User saved.'
      redirect_to admin_users_path
    else
      @role_ids = role_ids.map(&:to_i)
      flash.now[:error] = @user.errors.full_messages.first
      render :new
    end
  end

  def edit
    @role_ids = @user.roles.pluck(:id)
  end

  def update
    if @user.update(user_params)
      @user.save_roles(role_ids)
      flash[:success] = 'User updated.'
      redirect_to admin_users_path
    else
      @role_ids = role_ids.map(&:to_i)
      flash.now[:error] = @user.errors.full_messages.first
      render :edit
    end
  end

  def destroy
  end

  private
  def set_roles
    @roles = Role.all
  end

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :admin)
  end

  def role_ids
    params[:user][:roles].try(:keys) || []
  end
end

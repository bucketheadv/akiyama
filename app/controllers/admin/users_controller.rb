class Admin::UsersController < AdminController
  before_action :set_user, only: [:edit, :update, :show, :destroy]
  before_action :set_roles, only: [:edit, :update, :new, :create]
  def index
    @count = params[:count] || 10
    @users = User.where("email LIKE ?", "%#{params[:q]}%").page(params[:page]).per(@count)
    @dataSource = ActiveModel::Serializer::CollectionSerializer.new(@users, each_serializer:UserSerializer)
  end

  def new
    @user = User.new
    @role_ids = @user.roles.pluck(:id)
  end

  def create
    @user = User.new(user_params)
    @user.build_roles(role_ids)
    if @user.save
      flash[:success] = '用户已保存.'
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
    @user.build_roles(role_ids)
    if @user.update(user_params)
      flash[:success] = '用户已更新.'
      redirect_to admin_users_path
    else
      @role_ids = role_ids.map(&:to_i)
      flash.now[:error] = @user.errors.full_messages.first
      render :edit
    end
  end

  def update_password
    if current_user.update(password_params)
      flash[:notice] = '密码更新成功，请重新登录'
      redirect_to new_user_session_path
    else
      flash[:error] = current_user.errors.full_messages.first
      redirect_to edit_user_registration_path(tab: '2')
    end
  end


  def destroy
    @user.destroy
    flash[:success] = '用户已删除.'
    redirect_to admin_users_path
  end

  private
  def set_roles
    @roles = Role.all
  end

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :admin)
  end

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  def role_ids
    params[:user][:roles].try(:keys) || []
  end
end

class Admin::RolesController < AdminController
  before_action :set_admin_role, only: [:show, :edit, :update, :destroy]
  def index
    @admin_roles = Role.all
  end

  def new
    @admin_role = Role.new
  end

  def create
    @admin_role = Role.new(admin_role_params)
    if @admin_role.save
      flash[:success] = '角色已保存'
      redirect_to admin_roles_path
    else
      flash.now[:error] = @admin_role.errors.full_messages[0]
      render :new
    end
  end

  def edit
  end

  def update
    if @admin_role.update(admin_role_params)
      flash[:success] = '角色已更新'
      redirect_to admin_roles_path
    else
      flash.now[:error] = @admin_role.errors.full_messages[0]
      render :edit
    end
  end

  private
  def admin_role_params
    permit_params = params[:role][:content].map do |k, v|
      { "#{k}" => v.keys }
    end
    # params.require(:role).permit(:name, content: params[:role][:content].try(:keys)
    params.require(:role).permit(:name, content: permit_params )
  end

  def set_admin_role
    @admin_role = Role.find(params[:id])
  end
end

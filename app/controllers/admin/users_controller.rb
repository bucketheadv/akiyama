class Admin::UsersController < AdminController
  def index
    @count = params[:count] || 10
    @users = User.page(params[:page]).per(@count)
    @dataSource = ActiveModel::Serializer::ArraySerializer.new(@users, each_serializer:UserSerializer)
  end
end

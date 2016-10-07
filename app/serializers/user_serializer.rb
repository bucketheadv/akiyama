class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :admin, :created_at, :roles

  def admin
    object.admin? ? '是' : '否'
  end

  def created_at
    object.created_at.to_s(:db)
  end
end

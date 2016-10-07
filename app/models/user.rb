class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Concerns::Tablable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_role_relations, dependent: :destroy
  has_many :roles, through: :user_role_relations, class_name: 'Role'
  table_attr :email, :admin, :created_at

  def save_roles(ids)
    origin_ids = ids.map(&:to_i)
    ids = origin_ids - self.user_role_relations.map(&:role_id)
    ids.each do |_id|
      self.user_role_relations.create(role_id: _id)
    end
    self.user_role_relations.where.not(role_id: origin_ids).destroy_all
  end
end

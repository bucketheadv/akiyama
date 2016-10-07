class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Concerns::Tablable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_role_relations
  has_many :roles, through: :user_role_relations, class_name: 'Role'
  table_attr :email, :admin, :created_at
end

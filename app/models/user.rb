class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Concerns::Tablable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_role_relations, dependent: :destroy
  accepts_nested_attributes_for :user_role_relations, allow_destroy: true
  has_many :roles, through: :user_role_relations, class_name: 'Role'
  table_attr :email, :admin, :created_at

  def build_roles(role_ids)
    # origin_ids = ids.map(&:to_i)
    # ids = origin_ids - self.user_role_relations.map(&:role_id)
    # ids.each do |_id|
    #   self.user_role_relations.create(role_id: _id)
    # end
    # self.user_role_relations.where.not(role_id: origin_ids).destroy_all
    not_exists = self.user_role_relations.where.not(role_id: role_ids)
    attrs = not_exists.map do |e|
      { id: e.id, _destroy: '1' }
    end
    attrs += (role_ids.map(&:to_i) - not_exists.pluck(:id)).map do |r_id|
      r = self.user_role_relations.find_or_initialize_by(role_id: r_id)
      if !r
        { role_id: r_id }
      end
    end
    self.assign_attributes(user_role_relations_attributes: attrs.compact)
  end
end

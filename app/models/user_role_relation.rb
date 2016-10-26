class UserRoleRelation < ApplicationRecord
  belongs_to :user #, required: true
  belongs_to :role #, required: true
  validates_uniqueness_of :role_id, scope: :user_id
end

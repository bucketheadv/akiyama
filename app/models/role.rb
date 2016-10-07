class Role < ApplicationRecord
  serialize :content, Hash
  validates :name, presence: true, uniqueness: true
  has_many :user_role_relations, dependent: :destroy
  has_many :users, through: :user_role_relations, class_name: 'User'
end

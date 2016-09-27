class CreateUserRoleRelations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_role_relations do |t|
      t.integer :user_id
      t.integer :role_id

      t.timestamps
    end
    add_index :user_role_relations, :user_id
    add_index :user_role_relations, :role_id
  end
end

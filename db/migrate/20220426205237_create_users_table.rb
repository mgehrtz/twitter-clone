class CreateUsersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :users_tables do |t|
      t.index :id
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end

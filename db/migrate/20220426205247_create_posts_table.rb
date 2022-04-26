class CreatePostsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.index :id
      t.integer :user_id
      t.string :content

      t.timestamps
    end
  end
end

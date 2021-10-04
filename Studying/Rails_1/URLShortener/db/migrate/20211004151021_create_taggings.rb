class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :topic_id, null: false
      t.integer :shurl_id, null: false

      t.timestamps
    end
    add_index :taggings, :topic_id
    add_index :taggings, :shurl_id
    add_index :taggings, [:topic_id, :shurl_id], unique: true
  end
end

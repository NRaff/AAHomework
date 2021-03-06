class CreateTagTopic < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_topics do |t|
      t.string :name, null: false

      t.timestamps
    end
    
    add_index :tag_topics, :name, unique: true
  end
end

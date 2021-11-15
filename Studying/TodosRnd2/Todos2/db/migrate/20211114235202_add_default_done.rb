class AddDefaultDone < ActiveRecord::Migration[5.2]
  def change
    remove_column :todos, :done
    add_column :todos, :done, :boolean, null: false, default: false
  end
end

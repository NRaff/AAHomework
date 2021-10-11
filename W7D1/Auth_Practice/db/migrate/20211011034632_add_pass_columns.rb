class AddPassColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string
    add_column :users, :password, :string
  end
end

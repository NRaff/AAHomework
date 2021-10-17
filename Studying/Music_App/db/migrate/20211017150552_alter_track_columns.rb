class AlterTrackColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :Bonus?
    remove_column :tracks, :lyrics
    add_column :tracks, :bonus?, :boolean, null: false
    add_column :tracks, :lyrics, :text
  end
end

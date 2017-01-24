class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false

      t.timestamps null: false
    end
  end
end

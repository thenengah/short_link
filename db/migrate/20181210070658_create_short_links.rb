class CreateShortLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :short_links do |t|
      t.integer :link_id, null: false
      t.string :url, null: false, index: {unique: true} 
      t.references :link, null: false
      t.timestamps
    end
  end
end

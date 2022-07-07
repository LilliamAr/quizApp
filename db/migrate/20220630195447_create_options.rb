class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.string :label
      t.belongs_to :question
      t.timestamps
    end
  end
end

class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.integer :description, default: 0
      t.string :name
      
      t.belongs_to :quiz
      t.timestamps
    end
  end
end

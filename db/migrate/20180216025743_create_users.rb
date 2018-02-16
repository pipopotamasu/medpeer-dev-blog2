class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :firstname, null:false
      t.string :lastname, null:false
      t.integer :age, null:false
      t.string :adrress, null:false
      t.string :email, null:false
      t.integer :phone, null:false

      t.index :email, unique: true
      t.index :phone, unique: true
    end
  end
end

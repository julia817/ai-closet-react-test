class CreateBottoms < ActiveRecord::Migration[5.2]
  def change
    create_table :bottoms do |t|
      t.string :color
      t.string :type
      t.string :sex

      t.boolean :isCasual
      t.boolean :isBC
      t.boolean :isBusiness

      t.boolean :isSpring
      t.boolean :isSummer
      t.boolean :isFall
      t.boolean :isWinter
      
      t.timestamps
    end
  end
end

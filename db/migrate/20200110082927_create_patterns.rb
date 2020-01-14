class CreatePatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :patterns do |t|
      t.string :sex

      t.boolean :isCasual
      t.boolean :isBC
      t.boolean :isBusiness

      t.string :type1
      t.string :color1

      t.string :type2
      t.string :color2

      t.string :type3
      t.string :color3

      t.string :type4
      t.string :color4
      
      t.timestamps
    end
  end
end

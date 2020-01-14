class ChangePatterns < ActiveRecord::Migration[5.2]
  def change
    change_table :patterns do |t|
      t.remove :isCasual, :isBC, :isBusiness
      t.string :style
    end
  end
end

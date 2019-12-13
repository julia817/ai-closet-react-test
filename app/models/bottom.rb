class Bottom < ApplicationRecord
    has_one_attached :image
    self.inheritance_column = :_type_disabled
end

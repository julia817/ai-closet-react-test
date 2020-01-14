class Top < ApplicationRecord
    has_one_attached :image
    self.inheritance_column = :_type_disabled


def image_url
    if self.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(self.image, only_path: true)
    else
    nil
end
end

end

class Top < ApplicationRecord
    has_one_attached :image
    self.inheritance_column = :_type_disabled
<<<<<<< HEAD

def image_url
    if self.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(self.image, only_path: true)
    else
    nil
end
end
=======
>>>>>>> 928748193c531e16c6149ae049fe0b79483d2f07
end

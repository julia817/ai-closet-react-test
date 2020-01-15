class Pattern < ApplicationRecord
    has_many_attached :images

    def image_urls
        if self.images.attached?
            urls = []
            self.images.each do |i|
                url = Rails.application.routes.url_helpers.rails_blob_path(i, only_path: true)
                urls.push(url)
            end
        else
            nil
        end
        # TEST
        puts urls
    end
end

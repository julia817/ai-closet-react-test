class AiController < ApplicationController
    def final
        @patterns = Pattern.all
        @images = []
        @patterns.each do |p|
            p.images.each do |i|
            url = Rails.application.routes.url_helpers.rails_blob_path(i, only_path: true)
            @images.push(url)
            end
        end
    end

    def choose
    end

    def complete
    end

    def rentOrBuyCheck
    end

    def sendtosuit
    end

    def casual_check
    end


    def casual
        @patterns = Pattern.all
        # @images = img_urls(@patterns)
        @images = []
        @patterns.each do |p|
            urls = []
            p.images.each do |i|
                url = Rails.application.routes.url_helpers.rails_blob_path(i, only_path: true)
                urls.push(url)
            end
            @images.push(urls)
        end
    end

    def casual_female
        @patterns = Pattern.where(sex: "f").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def casual_male
        @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def bc_female
        @patterns = Pattern.where(sex: "f").where(syle: "bc")
        @images = img_urls(@patterns)
    end

    def bc_male
        @patterns = Pattern.where(sex: "m").where(style: "bc")
        @images = img_urls(@patterns)
    end

    def formal_female
        @patterns = Pattern.where(sex: "f").where(style: "formal")
        @images = img_urls(@patterns)
    end

    def formal_male
        @patterns = Pattern.where(sex: "m").where(style: "formal")
        @images = img_urls(@patterns)
    end

    private
        def img_urls patterns
            images = []
            patterns.each do |p|
                urls = []
                p.images.each do |i|
                    url = Rails.application.routes.url_helpers.rails_blob_path(i, only_path: true)
                    urls.push(url)
                end
                images.push(urls)
            end
            return images
        end
end    
    
class AiController < ApplicationController
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
        @patterns = Pattern.where(sex: "f").where(syle: "Busines Casual")
        @images = img_urls(@patterns)
    end

    def bc_male
        @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
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




    # Male final coordinate
    # Casual

    def final_m_c_c1 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_m_c_c2 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_m_c_c3 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_m_c_c4 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_m_c_c5 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "casual")
        @images = img_urls(@patterns)
    end

    # Business casual

    def final_m_bc_c1 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_m_bc_c2 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_m_bc_c3 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_m_bc_c4 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_m_bc_c5 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

        # formal

    def final_m_fo_c1 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_m_fo_c2 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_m_fo_c3 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_m_fo_c4 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_m_fo_c5 
        @patterns = @patterns = Pattern.where(sex: "m").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    # business casual ladies 

     def final_w_bc_c1 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_w_bc_c2 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_w_bc_c3 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_w_bc_c4 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

    def final_w_bc_c5 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Business Casual")
        @images = img_urls(@patterns)
    end

        #Formal ladies 

     def final_w_fo_c1 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_w_fo_c2 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_w_fo_c3 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_w_fo_c4 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    def final_w_fo_c5 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "Formal")
        @images = img_urls(@patterns)
    end

    # casual ladies

         def final_w_c_c1 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_w_c_c2 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_w_c_c3 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_w_c_c4 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "casual")
        @images = img_urls(@patterns)
    end

    def final_w_c_c5 
        @patterns = @patterns = Pattern.where(sex: "f").where(style: "casual")
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
    
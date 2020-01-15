class PatternsController < ApplicationController
    def new
        @pattern = Pattern.new
    end

    def create
        @pattern = Pattern.create(pattern_params)
        redirect_to @pattern
    end

    def show
        @pattern = Pattern.find(params[:id])
    end

    def edit
        @pattern = Pattern.find(params[:id])
    end

    def update
        @pattern = Pattern.find(params[:id])
        params[:pattern][:image_ids].each do |image_id|
            image = @pattern.images.find(image_id)
            image.purge
        end
        @pattern.update(pattern_params)
        redirect_to @pattern
    end

    def index
        @patterns = Pattern.all
    end


    private
        def pattern_params
            params.require(:pattern).permit(:type1, :color1, :type2, :color2, :type3, :color3, :type4, :color4, :sex, :style, images:[])
        end
end

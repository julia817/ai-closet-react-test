class BottomsController < ApplicationController
    def new
        @bottom = Bottom.new
    end

    def create
        @bottom = Bottom.create(bottom_params)
        redirect_to @bottom
    end

    def show
        @bottom = Bottom.find(params[:id])
    end

    def edit
        @bottom = Bottom.find(params[:id])
    end

    def update
        @bottom = Bottom.find(params[:id])
        @bottom.update(bottom_params)
        redirect_to @bottom
    end

    def index
        @bottoms = Bottom.all
    end

    private
        def bottom_params
            params.require(:bottom).permit(:type, :color, :sex, :isSpring, :isSummer, :isFall, :isWinter, :isCasual, :isBC, :isBusiness, :image)
        end
end

class TopsController < ApplicationController
    def new
        @top = Top.new
    end

    def create
        @top = Top.create(top_params)
        redirect_to @top
    end

    def show
        @top = Top.find(params[:id])
    end

    def edit
        @top = Top.find(params[:id])
    end

    def update
        @top = Top.find(params[:id])
        @top.update(top_params)
        redirect_to @top
    end

    def index
        @tops = Top.all
    end

    private
        def top_params
            params.require(:top).permit(:type, :color, :sex, :isSpring, :isSummer, :isFall, :isWinter, :isCasual, :isBC, :isBusiness, :image)
        end
end

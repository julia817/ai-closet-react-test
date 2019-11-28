class ClothesController < ApplicationController
    def new
        @clothe = Clothe.new
    end

    def create
        @clothe = Clothe.create params.require(:clothe).permit(:type, :color, :image)
        redirect_to @clothe
    end

    def show
        @clothe = Clothe.find(params[:id])
    end

    def edit
        @clothe = Clothe.find(params[:id])
    end

    def update
        @clothe = Clothe.find(params[:id])
        @clothe.update params.require(:clothe).permit(:type, :color, :image)
        redirect_to @clothe
    end

    def index
        @clothes = Clothe.all
    end
end

class OnepiecesController < ApplicationController
    def new
        @onepiece = Onepiece.new
    end

    def create
        @onepiece = Onepiece.create(onepiece_params)
        redirect_to @onepiece
    end

    def show
        @onepiece = Onepiece.find(params[:id])
    end

    def edit
        @onepiece = Onepiece.find(params[:id])
    end

    def update
        @onepiece = Onepiece.find(params[:id])
        @onepiece.update(onepiece_params)
        redirect_to @onepiece
    end

    def index
        @onepieces = Onepiece.all
    end

    private
        def onepiece_params
            params.require(:onepiece).permit(:type, :color, :sex, :isSpring, :isSummer, :isFall, :isWinter, :isCasual, :isBC, :isBusiness, :image)
        end
end

class PagesController < ApplicationController
  def index
    @current_weather = Weather.current
  	@forecast = Weather.forecast
  end

  def self_choose
  end

  def ai_choose
  end

  def outfits
  end

  def store
  end
end

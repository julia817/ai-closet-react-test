class PagesController < ApplicationController
  def index
    current = Weather.current
    @current_weather = current["weather"][0]["description"]
    @current_degree = current["main"]["temp"]
    # puts @current_weather
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

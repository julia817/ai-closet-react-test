class PagesController < ApplicationController
  def index
    current = Weather.current
    @currentWeather = current["weather"][0]["description"]
    @current_degree = current["main"]["temp"]
    # puts @current_weather
    @forecast = Weather.forecast
    require 'json'
   
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

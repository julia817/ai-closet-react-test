class PagesController < ApplicationController
  def index
    #changed variable names to camelCase for readability in javascript
    current = Weather.current
     @currentWeather = current["weather"][0]["description"]
    @currentDegree = current["main"]["temp"]
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

Rails.application.routes.draw do
  resources :patterns
  resources :bottoms
  resources :tops
  resources :onepieces
  
  get 'choose/ai_casual'
  get 'choose/myself'
  #commented out for routing purposes
  # get '*path', to: redirect('/'), constraints: lambda { |req|
  #   req.path.exclude? 'rails/active_storage'
  # }

  root 'pages#index'
  # match:'*path', to:'pages#index', via: :all
  get '/login', to: 'pages#login'

# AiCoordinateページのルート設定
  get '/AiCoordinate', to:'pages#ai_choose'
  get '/AiCoordinate-Casual', to:'pages#ai_casual'
  get '/AiCoordinate-Formal', to:'pages#ai_formal'
  get '/AiCoordinate-BusinessCasual', to:'pages#ai_business'
  get '/AiCoordinate-Check', to: 'pages#ai_rentOrBuyCheck'
  get '/AiCoordinate-finalSelection', to: 'pages#ai_final'
  get '/AiCoordinate-SuitTensou', to: 'pages#ai_sendtosuit'
  get '/AiCoordinate-Complete', to: 'pages#ai_complete'



  get '/LetMeChoose', to:'pages#self_choose'
  get '/Outfits', to:'pages#outfits'
  get '/Store', to:'pages#store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

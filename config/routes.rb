Rails.application.routes.draw do
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
  get '/AiCoordinate', to:'pages#ai_choose'
  get '/LetMeChoose', to:'pages#self_choose'
  get '/Outfits', to:'pages#outfits'
  get '/Store', to:'pages#store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

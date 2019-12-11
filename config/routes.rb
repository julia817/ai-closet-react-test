Rails.application.routes.draw do
  resources :bottoms
  resources :tops
  resources :onepieces
  get 'choose/ai'
  get 'choose/myself'
  resources :clothes
  get '*path', to: redirect('/'), constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  root 'pages#index'
  # match:'*path', to:'pages#index', via: :all

  # get 'pages/self_choose'
  # get 'pages/ai_choose'
  # get 'pages/outfits'
  # get 'pages/store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

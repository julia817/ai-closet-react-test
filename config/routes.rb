Rails.application.routes.draw do
  resources :clothes

  root 'pages#index'

  get 'pages/self_choose'
  get 'pages/ai_choose'
  get 'pages/outfits'
  get 'pages/store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

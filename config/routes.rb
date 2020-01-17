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
  get '/AiCoordinate', to:'ai#choose'
  get '/AiCoordinate-Casual-Female', to: 'ai#casual_female'
  get '/AiCoordinate-Casual-Male', to: 'ai#casual_male'
  get '/AiCoordinate-BusinessCasual-Female', to: 'ai#bc_female'
  get '/AiCoordinate-BusinessCasual-Male', to: 'ai#bc_male'
  get '/AiCoordinate-Formal-Female', to: 'ai#formal_female'
  get '/AiCoordinate-Formal-Male', to: 'ai#formal_male'
  get '/AiCoordinate-Casual', to:'ai#casual'
  get '/AiCoordinate-Formal', to:'ai#formal'
  get '/AiCoordinate-BusinessCasual', to:'ai#business'
  get '/AiCoordinate-Check', to: 'ai#rentOrBuyCheck'
  
  get '/AiCoordinate-finalSelection-w-c1', to: 'ai#final_w_c1'
  get '/AiCoordinate-finalSelection-w-c2', to: 'ai#final_w_c2'
  get '/AiCoordinate-finalSelection-w-c3', to: 'ai#final_w_c3'
  get '/AiCoordinate-finalSelection-w-c4', to: 'ai#final_w_c4'
  get '/AiCoordinate-finalSelection-w-c5', to: 'ai#final_w_c5'

    get '/AiCoordinate-finalSelection-m-c1', to: 'ai#final_m_c1'
  get '/AiCoordinate-finalSelection-m-c2', to: 'ai#final_m_c2'
  get '/AiCoordinate-finalSelection-m-c3', to: 'ai#final_m_c3'
  get '/AiCoordinate-finalSelection-m-c4', to: 'ai#final_m_c4'
  get '/AiCoordinate-finalSelection-m-c5', to: 'ai#final_m_c5'
  get '/AiCoordinate-SuitTensou', to: 'ai#sendtosuit'
  get '/AiCoordinate-Complete', to: 'ai#complete'



  get '/LetMeChoose', to:'pages#self_choose'
  get '/Outfits', to:'pages#outfits'
  get '/Store', to:'pages#store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

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

# AiCoordinateページのルート設定\

  # temporary male or female page for miraisouzou
  get '/AiCoordinate-GenderCheck', to: 'ai#ai_male_or_female'
  get '/AiCoordinate-Female', to:'ai#choose_w'
  get '/AiCoordinate-Male', to:'ai#choose_m'
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
  

  # casual womens
  get '/AiCoordinate-finalSelection-w-c-c1', to: 'ai#final_w_c_c1'
  get '/AiCoordinate-finalSelection-w-c-c2', to: 'ai#final_w_c_c2'
  get '/AiCoordinate-finalSelection-w-c-c3', to: 'ai#final_w_c_c3'
  get '/AiCoordinate-finalSelection-w-c-c4', to: 'ai#final_w_c_c4'
  get '/AiCoordinate-finalSelection-w-c-c5', to: 'ai#final_w_c_c5'
# business wonens
  get '/AiCoordinate-finalSelection-w-bc-c1', to: 'ai#final_w_bc_c1'
  get '/AiCoordinate-finalSelection-w-bc-c2', to: 'ai#final_w_bc_c2'
  get '/AiCoordinate-finalSelection-w-bc-c3', to: 'ai#final_w_bc_c3'
  get '/AiCoordinate-finalSelection-w-bc-c4', to: 'ai#final_w_bc_c4'
  get '/AiCoordinate-finalSelection-w-bc-c5', to: 'ai#final_w_bc_c5'
# casual mens
  get '/AiCoordinate-finalSelection-m-c-c1', to: 'ai#final_m_c_c1'
  get '/AiCoordinate-finalSelection-m-c-c2', to: 'ai#final_m_c_c2'
  get '/AiCoordinate-finalSelection-m-c-c3', to: 'ai#final_m_c_c3'
  get '/AiCoordinate-finalSelection-m-c-c4', to: 'ai#final_m_c_c4'
  get '/AiCoordinate-finalSelection-m-c-c5', to: 'ai#final_m_c_c5'
# business mens
  get '/AiCoordinate-finalSelection-m-bc-c1', to: 'ai#final_m_bc_c1'
  get '/AiCoordinate-finalSelection-m-bc-c2', to: 'ai#final_m_bc_c2'
  get '/AiCoordinate-finalSelection-m-bc-c3', to: 'ai#final_m_bc_c3'
  get '/AiCoordinate-finalSelection-m-bc-c4', to: 'ai#final_m_bc_c4'
  get '/AiCoordinate-finalSelection-m-bc-c5', to: 'ai#final_m_bc_c5'

  # formal mens
  get '/AiCoordinate-finalSelection-m-fo-c1', to: 'ai#final_m_fo_c1'
  get '/AiCoordinate-finalSelection-m-fo-c2', to: 'ai#final_m_fo_c2'
  get '/AiCoordinate-finalSelection-m-fo-c3', to: 'ai#final_m_fo_c3'
  get '/AiCoordinate-finalSelection-m-fo-c4', to: 'ai#final_m_fo_c4'
  get '/AiCoordinate-finalSelection-m-fo-c5', to: 'ai#final_m_fo_c5'

  get '/AiCoordinate-SuitTensou', to: 'ai#sendtosuit'
  get '/AiCoordinate-Complete', to: 'ai#complete'




  get 'test', to: 'pages#test'
  get '/LetMeChoose', to:'pages#self_choose'
  get '/Outfits', to:'pages#outfits'
  get '/Store', to:'pages#store'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

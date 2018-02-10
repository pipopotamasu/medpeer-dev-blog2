Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/csrf', to: 'csrf#index'
  post '/csrf', to: 'csrf#create'
  root to: 'csrf#index'
end

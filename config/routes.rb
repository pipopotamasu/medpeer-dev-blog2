Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/chapter1', to: 'chapter1#index'
  get '/chapter2', to: 'chapter2#index'
  post '/users', to: 'users#create'
  root to: 'home#index'
end

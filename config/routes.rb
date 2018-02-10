Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/chapter1', to: 'chapter1#index'
  post '/chapter1', to: 'chapter1#create'
  root to: 'chapter1#index'
end

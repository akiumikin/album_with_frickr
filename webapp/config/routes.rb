Rails.application.routes.draw do
  resources :albums
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # viewの呼び出し
  root to: 'albums#index'

  get '/_/albums/list', to: 'albums#list'
  post '/_/albums/create', to: 'albums#create'
  delete '/_/albums/:id', to: 'albums#destroy'
end

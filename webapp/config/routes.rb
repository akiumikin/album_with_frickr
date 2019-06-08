Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  resources :albums
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # album
  get '/_/albums/list', to: 'albums#list'
  post '/_/albums/create', to: 'albums#create'
  get '/_/albums/:id', to: 'albums#show'
  put '/_/albums/:id', to: 'albums#update'
  delete '/_/albums/:id', to: 'albums#destroy'

  # album_images
  delete '/_/album_images/:id', to: 'album_images#destroy'

  # viewの呼び出し
  root to: 'albums#index'
  get '/*path', to: 'albums#index'
end

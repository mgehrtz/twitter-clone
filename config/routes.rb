Rails.application.routes.draw do

  get '/' => 'static_pages#home'
  get '/feed' => 'static_pages#index'

  namespace :api do

    # Posts
    get '/posts' => 'post#index'
    get '/:username/posts' => 'post#index_by_user'

    # User
    post '/users' => 'user#create'

    # Session
    post '/auth' => 'session#create'
    get '/auth' => 'session#authenticate_user'
    delete '/auth' => 'session#logout_user'

  end

end

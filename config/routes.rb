Rails.application.routes.draw do

  get '/' => 'static_pages#home'
  get '/feed' => 'static_pages#index'

  namespace :api do
    get '/posts' => 'post#index'
    get '/:username/posts' => 'post#index_by_user'
    post '/users' => 'user#create'
  end

end

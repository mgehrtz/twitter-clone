Rails.application.routes.draw do

  get '/' => 'static_pages#home'
  get '/feed' => 'static_pages#index'

  namespace :api do

  end

end

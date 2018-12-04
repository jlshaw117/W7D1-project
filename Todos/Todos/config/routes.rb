Rails.application.routes.draw do
  # get 'todos/show'
  # get 'todos/index'
  # get 'todos/create'
  # get 'todos/update'
  # get 'todos/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
  	resources :todos, except: [:new, :edit]
  end
end

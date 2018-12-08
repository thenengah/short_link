Rails.application.routes.draw do
  post '/add' => 'link#create'
  post'/remove' => 'link#destroy'
  get'/:url' => 'short_link#show'
  root :to => 'link#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do

  resources :locations
  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }
  
  get ':controller(/:action(/:id))'
  post ':controller(/:action(/:id))'
  root 'home#phone'
end

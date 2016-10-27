Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  root 'admin/roles#index'

  namespace :admin do
    resources :roles
    resources :users do
      collection do
        put 'update_password'
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

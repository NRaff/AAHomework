Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :bands do
    resources :albums, only: [:new, :index]
  end

  resources :albums, except: [:new, :index] do
    resources :tracks, only: [:new, :index]
  end

  resources :tracks, except: [:new, :index]

  root to: "sessions#new"
end

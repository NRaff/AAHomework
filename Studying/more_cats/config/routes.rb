Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cat_rental_requests do
    member do
      get 'approve'
      get 'deny'
    end
  end
  resources :cats
end

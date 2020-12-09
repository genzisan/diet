Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  resources :pages do 
    collection do
      get 'second'
      get 'third'
    end
  end
end

# get 'third'
class User < ApplicationRecord

    validates :email, :presence => true
    validates :password, :presence => true, :length => { minimum: 8, maximum: 40 }
    validates :username, :uniqueness => true

    has_many :posts
    has_many :sessions
end

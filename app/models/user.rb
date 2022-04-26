class User < ApplicationRecord
    validates :email, :presence => true
    validates :password, :presence => true, :length => { minimum: 8, maximum: 40 }
    validates :username, :unique => true

    has_many :posts
end

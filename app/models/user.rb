class User < ApplicationRecord

    validates :email, :presence => true
    validates :password, :presence => true, :length => { minimum: 8, maximum: 40 }
    validates :username, :presence => true, :uniqueness => true, :length => { minimum: 4, maximum: 64 }

    after_validation :hash_password

    has_many :posts
    has_many :sessions

    private
        def hash_password
            self.password = BCrypt::Password.create(self.password)
        end
end

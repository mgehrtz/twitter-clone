class Api::PostController < ApplicationController

    # Show all posts
    def index
        @posts = Post.all
    end

    # Show a user's posts
    def index_by_user
        user = User.find_by(username: params[:username])

        @posts = Post.where(user_id: user.id)

        render 'index'
    end
end

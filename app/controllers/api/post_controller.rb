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

    # Create a new post
    def create
        token = cookies.permanent.signed[:twitter_clone_session_token]
        session = Session.find_by(token: token)
        
        permitted = post_params
        user = User.find_by(username: permitted[:username])

        post = Post.new(content: permitted[:content], user_id: user.id)

        if post.user_id == session.user.id && post.save
            render json: {
                success: true,
                post: {
                    id: post.id,
                    content: post.content,
                    username: '@' + post.user.username
                }
            }
        else
            render json: {
                success: false
            }
        end
    end

    # Delete post by id
    def destroy
        token = cookies.permanent.signed[:twitter_clone_session_token]
        session = Session.find_by(token: token)
        post = Post.find_by(id: params[:id])

        if post.user.id == session.user.id
            if post.delete
                render json: {
                    success: true
                }
            else
                render json: {
                    success: false
                }
            end
        else
            render json: {
                success: false
            }
        end
    end

    private
        def post_params
            params.require(:post).permit(:content, :username)
        end
end

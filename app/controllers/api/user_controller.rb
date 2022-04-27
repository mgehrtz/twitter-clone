class Api::UserController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            render json: {
                success: true,
                user: {
                    username: @user.username,
                    first_name: @user.first_name,
                    last_name: @user.last_name,
                    email: @user.email
                }
            }
        else
            render json: {
                success: false
            }
        end

    end

    private
        def user_params
            params.require(:user).permit(:password, :username, :first_name, :last_name, :email)
        end
end

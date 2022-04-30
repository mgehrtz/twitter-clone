class StaticPagesController < ApplicationController
  def home
    token = cookies.permanent.signed[:twitter_clone_session_token]
    session = Session.find_by(token: token)

    if session
      redirect_to '/feed'
    end
  end

  def index
    token = cookies.permanent.signed[:twitter_clone_session_token]
    @session = Session.find_by(token: token)

    if @session
      render 'feed'
    else
      redirect_to '/'
    end
  end

end

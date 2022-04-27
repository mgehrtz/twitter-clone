class StaticPagesController < ApplicationController
  def home
  end

  def index
    token = cookies.permanent.signed[:twitter_clone_session_token]
    session = Session.find_by(token: token)

    if session
      render 'feed'
    else
      redirect_to '/'
    end
  end
end

class StaticPagesController < ApplicationController
  def home
  end

  def index
    render 'feed'
  end
end

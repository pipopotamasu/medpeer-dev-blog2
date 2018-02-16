class Chapter3Controller < ApplicationController
  def new
    @user = User.new
  end
end

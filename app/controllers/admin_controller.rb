class AdminController < ApplicationController
  before_action :authenticate_user!
  rescue_from CanCan::AccessDenied do |exception|
    render json: { code: 403 } ,status: 403
  end
end

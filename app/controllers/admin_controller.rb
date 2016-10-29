class AdminController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource
  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.html { render file: '/public/422.html', status: 403, layout: false }
      format.json { render json: { code: 403 } ,status: 403 }
    end
  end
end

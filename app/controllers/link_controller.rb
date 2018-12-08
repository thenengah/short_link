class LinkController < ApplicationController
  layout "links"

  def index
    @links = Link.all.includes(:short_link).order(updated_at: :desc)
  end

  def create
    @link = Link.find_or_create_by(link_params)
    @link.touch if @link.valid?
    respond_to do |format|
      format.json { render json: @link.to_json }
    end
  end

  def destroy 
    @link = Link.find_by(link_params)
    @link.destroy if @link 
    respond_to do |format|
      format.json { render json: { ok: true } }
    end
  end

  private

  def link_params
    params.require(:link).permit(:url)
  end
end

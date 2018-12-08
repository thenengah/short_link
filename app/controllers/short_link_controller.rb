class ShortLinkController < ApplicationController
  def show 
    @short_link = ShortLink.find_by_url(params[:url])
    redirect_to @short_link.link.url
  end
end

module ApplicationHelper
  def prerender
    Rails.env.production?
  end

  def format_links(links)
    links.map { |l| l.attributes.merge(short_url: l.short_link.url) }
  end
end

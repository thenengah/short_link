require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "should prerender" do
    assert_equal false, prerender 
  end

  test "should format links" do
    link = Link.create(url: 'https://www.google.com')
    links = format_links([link]) 
    assert_equal links.first[:short_url], link.short_url
  end
end

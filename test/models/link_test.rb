require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  test "should not save an invalid url" do
    link = Link.new({ url: 'a-bad-url' })
    assert_not link.save 
    assert_equal link.errors.full_messages, ["Url is invalid"]
  end

  test "should save a valid url" do
    url = 'https://www.google.com'
    link = Link.new(url: url)
    assert link.save 
    assert_equal link.url, url
    assert link.short_link.valid?
    assert_equal link.short_link.url, ShortLink.generate_url(link.id)
  end
end

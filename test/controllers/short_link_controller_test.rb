class ShortLinkControllerTest < ActionDispatch::IntegrationTest
  test "should redirect" do
    url = 'https://www.google.com'
    link = Link.create(url: url)
    get "/#{link.short_url}"
    assert_equal response.headers["Location"], url
    assert_equal status, 302 
  end
end

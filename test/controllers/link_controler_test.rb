class LinkControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get '/' 
    assert_response :success
  end

  test "should create a short_link" do
    url = 'https://www.google.com' 
    post '/add', params: { link: { url: url } }, xhr: true
    assert_response :success
    hash = JSON.parse response.body 
    assert_equal hash["link"]["url"], url
    assert_equal hash["link"]["short_url"], ShortLink.generate_url(hash["link"]["id"])
  end

  test "should delete a short_link" do
    url = 'https://www.google.com' 
    post '/remove', params: { link: { url: url } }, xhr: true
    assert_response :success
  end
end

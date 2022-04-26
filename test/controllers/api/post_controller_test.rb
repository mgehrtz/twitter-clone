require "test_helper"

class Api::PostControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_post_create_url
    assert_response :success
  end
end

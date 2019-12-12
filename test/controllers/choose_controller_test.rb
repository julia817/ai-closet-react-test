require 'test_helper'

class ChooseControllerTest < ActionDispatch::IntegrationTest
  test "should get ai" do
    get choose_ai_url
    assert_response :success
  end

  test "should get myself" do
    get choose_myself_url
    assert_response :success
  end

end

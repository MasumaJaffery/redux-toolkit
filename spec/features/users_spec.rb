require 'rails_helper'

RSpec.describe "Users actions", type: :feature do
  describe "/users" do

  end

  describe "/users/:id" do
    before do
      visit '/users/1'
    end

    it "finds user name on the page" do
      expect(page).to have_content("James")
    end
  end
end

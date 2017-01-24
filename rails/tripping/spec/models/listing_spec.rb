require 'rails_helper'

RSpec.describe Listing, type: :model do
  let(:listing) { create(:listing, title: 'Test Listing #1') }

  context '#validations' do
    let(:listing_without_title) { listing.tap { |l| l.title = nil } }

    describe 'title' do
      it 'must has a title' do
        expect(listing_without_title).to_not be_valid
      end

      it 'must have a unique title' do
        expect(Listing.new(title: listing.title)).to_not be_valid
      end
    end
  end
end

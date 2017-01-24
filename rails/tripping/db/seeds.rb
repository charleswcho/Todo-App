# Creates 1,000 listings
1000.times { |i| Listing.create(title: "Listing ##{i}") }

# Once you've created the Click model, you may uncomment (update if needed) and
# run `db:setup` to reset your database and load it with seed data.
# Creates 1,000 random clicks
# 10,000.times { Click.create(listing_id: Random.rand(1001)) }

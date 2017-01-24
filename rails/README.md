# Tripping.com Rails Engineering Challenge

Hi there!

Thanks for your interest in joining the [Tripping.com](https://tripping.com) Engineering Team! We're excited at the possibility of working with you.
We've put together a short open ended question to allow you to demonstrate your engineering skills. Please take all of the time you need to complete this task - we're hoping it won't take more than an hour of your time :)

We wish you the best of luck and can't wait to see what you create!

Thanks,

The Tripping.com Engineering Team

## Overview

We've provided you with a simple app that allows you to flex your Rails knowledge. The goal of this challenge is to create an API that allows us to track the click history of given listings on our site.

You're given:

##### The `Listing` model
 - Has one attribute, `title`

You'll need to build the following:

##### The `Click` model
  - Generate a migration to create the appropriate database table.

  - Each entry **must** reference a `Listing` (may need to update the `Listing`)
  - Each entry **must** keep track of when it was created

  - May have helper methods
  - May have validations

##### The `ClicksController` controller
  - **Must** have two methods.
    - `#recent_listings` - Returns a unique JSON list of the 100 most recently clicked listings ordered by most recent first. Format:
    ```
      [
        { listing_id: ###, title: 'abc', clicks: ###, last_clicked: '##/##/##' },
        { listing_id: ###, title: 'abc', clicks: ###, last_clicked: '##/##/##' },
        { listing_id: ###, title: 'abc', clicks: ###, last_clicked: '##/##/##' }
      ]
    ```
    - `#stats(listing_id)` - Returns the number of clicks a given listing has received in the last day, week, and month. Format:
    ```
      {
        listing_id: ###,
        daily_clicks: ###,
        weekly_clicks: ###,
        monthly_clicks: ###
      }
    ```

### Routes & API
  - **Must** have endpoints: `/api/recent_listings/` & `/api/stats/:listing_id`

  - Should be namespaced under `api`. eg. `/api/clicks_controller.rb`

## Getting Started

To use this application, you will need to download and install [Rails](http://guides.rubyonrails.org/getting_started.html).

Once you have Rails installed, clone this repository to your local machine:
```
git clone git@github.com:tripping/tripping-challenges.git
```

Under the `rails` directory, you'll see a barebones Rails app.

Install any dependencies:
```
bundle install
```

Setup your database (provides 1,000 listings):
```
bin/rake db:setup
bin/rake db:migrate
```

And start the local server:
```
rails server
```

Once the server is running, you can access the start page (index.html) by opening your browser to [localhost](http://localhost:3000).

To stop the server, press CTRL-C.

## Requirements

The project is open ended, so feel free to create the HTML however you'd like, style the app in any way you'd like, and store the data in any way you like.

All submissions are accepted as long as we can:
* Make a `GET` request to `/api/recent_listings` and receive a unique list of the 100 most recently clicked listings.
* Make a `GET` request to `/api/stats/:listing_id` and receive the daily, weekly and monthly click stats for a given listing based on `listing_id`
* Has some form of error handling. Eg. What happens when I request the stats for a listing that doesn't exist?

## Bonus
 * We've added [`rspec`](http://rspec.info/), a popular testing library. Write some specs to test the model, controller and any methods you've designed.
    * You'll need to set up your testing environment. Run `bin/rake db:migrate RAILS_ENV=test` to setup your testing DB.
    * You can create a factory using [`factory_girl`](https://github.com/thoughtbot/factory_girl) to use within your tests.
    * Your tests should be located within the `spec` directory.
    * You can run all your tests with `bundle exec rspec spec/`
 * Make a web interface that allows you to interact with the newly created API.
 * Write comments. Feel free to comment directly within the code explaining your thought process.

## Submission

On completion of the task, there are 2 ways to send your code to us:
* Zip up the project directory and email it to us at eng@tripping.com with the subject "{Your Name} - Rails Code Challenge"
* Fork this repository, commiting your changes, and submiting a [Pull Request](https://github.com/tripping/tripping-challenges/pulls) to us

## Questions?

You can either write us a [GitHub issue](https://github.com/tripping/tripping-challenges/issues) or email us at eng@tripping.com

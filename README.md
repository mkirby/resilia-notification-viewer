# Resilia Notification Viewer

A simple react notification viewer that populates a dropdown with all users. When a user is selected, that's users notifications are rendered below.

### Ruby on Rails Backend: [ Repo](https://github.com/mkirby/resilia-api)

### React Frontend: [ Repo](https://github.com/mkirby/resilia-notification-viewer)

- Clone down and open the Ruby on Rails resilia-api backend repo
- Run `bundle install`
- Create the postgresql server and populate it with data
  - `rails db:create`
  - `rails db:migrate`
  - `rails db:seed` (_seed data in progress_)
- Start the server by running `rails s`.
  Clone down and open the React resilia-notification-viewer Frontend
- Run `npm install`
- Run `npm start`

### Technologies

- [React](https://github.com/facebook/react)
- [React Redux](https://github.com/reduxjs/react-redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### Prompt Requirements

- frontend should request notifications from an API
- notifications should be housed in a persistent store
- persistent store that can survive the API server restarting
- notification objects contain arbitrary domain data along with attributes that allow it to
- function as a “notification” a user is intended to receive

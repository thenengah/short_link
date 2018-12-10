# ShortLink

React on Rails app that creates short links from urls.

[React on Rails](https://github.com/shakacode/react_on_rails) renders react components on both the client and server. As for this app (ShortLink) universal rendering SSR/CSR (server/client) is only enabled in production. Likewise, hot module reloading (HMR) is only enabled in development. 

### HMR (Development)

You can test HMR by running ShortLink in development mode. Update the client codebase and the user interface should be updated almost immediately. Watch your web browser for full details.

### SSR/CSR (Production)

When ShortLink is run in production mode react components are built both server side and client side. You can test this by turning off javascript and the only difference should be a no script banner which indicates javascript is off.

# Quickstart

1. `rvm install 2.5.1` or something similar and set as default.
2. `nvm install v9.6.0` or something similar and set as default.
3.  `git clone https://github.com/thenengah/short_link.git`
4. `cd short_link`
5. `bundle`
6. `npm install`
7. `yarn install`

## Environments

### Test

Testing needs some work, but all major parts of the application have test including models, controllers, and helpers. No view or client tests yet. 

`bin/rails test`

### Development

1. `rake db:migrate`
2. `gem install foreman`
2. `foreman start -f Procfile.dev-server`

### Production

1. `rake db:migrate RAILS_ENV=production`
2. `RAILS_ENV=production bundle exec rails assets:precompile`
3. `rails s -e production`

## Todo

This application was created over the course of several hours and for the most part is happy path coding. Here are some ideas for improvements granted more time:

1. Besides the README there is no documentation. Depending upon collaborators, it might be nice to come up with a standard.
2. There is no code quality or linting for both ruby and javascript. Would be good to add tools to the build process so it's not possible to commit code and create pull requests if the code does not adhere to some conventions.
3. The redirect route `/:short_url` does not handling missing records. It assumes the `:short_url` params will map to something. This needs to get updated
4. The random characters that make up the short links/urls come from `hashids` gem. The hashids gem uses a number (the id in the db) and salt to produce a 6 digit hash. I tested it up to 1 million records and it produced 1 million unique hashes. Would be good to keep going and see at what point it starts repeating since it's a deterministic function.
5. Organization of the client codebase can be improved such as creating action files, combining reducers, and composing modules; however, at this point it's not complicated and easy to navigate but I can see not long from now this not being the case.
6. Create integration, staging, and production environments with a built process that include code quality tools and test suites.


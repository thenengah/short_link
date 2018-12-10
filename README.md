# ShortLink

React on Rails app that creates short links from urls.

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

`bin/rails test`

### Development

1. `rake db:migrate`
2. `gem install foreman`
2. `foreman start -f Procfile.dev-server`

### Production

1. `rake db:migrate RAILS_ENV=production`
2. `RAILS_ENV=production bundle exec rails assets:precompile`
3. `rails s -e production`

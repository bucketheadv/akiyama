# README

# Install

```bash
git clone https://github.com/sven199109/akiyama
cd akiyama
bundle
rake db:create && rake db:migrate && rake db:seed
rake bower:install
npm run postinstall
foreman start
```

Then, visit `http://localhost:3000`.

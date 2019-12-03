# Development

The steps below will walk you through setting up your own instance of Major

## Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v10 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager
- Ruby and [Bundler](http://bundler.io/). Highly suggest using [rvm](https://rvm.io/)

## Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
yarn install
```

This will then automatically run `bundle install` to install the ruby gems.

## Usage

### Starting the app

```
yarn run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

## Final Build
To prepare the app for deployment run:

```
yarn run build
```
This will package the app and place all the contents in the `_site` directory.
The app can then be run by any web server.

## Automatic deployment
The Major website is setup to automatically deploy the website using Circle CI.

There are 2 deploy environments:
- Production (http://wegomajor.com/) every time there's a commit to the `master` branch.
- Staging (http://major.surge.sh/) every time there's a commit to the `develop` branch.

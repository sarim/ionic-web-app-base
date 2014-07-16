Ionic App Base without Cordova
=====================

A starting project for Ionic without the cordova related things. This is a forked version of main ionic app base, minus the cordova things.
It is useful when you are creating a hosted web app, not a native web app.

## Installation

To use this project as is, first clone the repo from GitHub,

```bash
$ git clone https://github.com/sarim/ionic-web-app-base.git myApp
```

then run:

```bash
$ cd myApp
$ sudo npm install -g gulp
$ npm install
$ gulp install
```

## Running

To run the app in browser,

```bash
$ gulp server
```

It'll open the app in browser. When deploying the app, just set the *docroot* to `www` folder.

## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.

#### Using the Nightly Builds of Ionic

If you feel daring and want use the bleeding edge 'Nightly' version of Ionic, change the version of Ionic in your bower.json to this:

```
"ionic": "driftyco/ionic-bower#master"
```

Warning: the nightly version is not stable.
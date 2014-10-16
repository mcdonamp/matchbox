# Matchbox -- Strike up a Javascript API with Firebase in a flick of the wrist

<!-- [![Build Status](https://travis-ci.org/COMPANY_NAME/REPO_NAME.svg?branch=master)](https://travis-ci.org/COMPANY_NAME/REPO_NAME)
[![Coverage Status](https://img.shields.io/coveralls/COMPANY_NAME/REPO_NAME.svg?branch=master)](https://coveralls.io/r/COMPANY_NAME/REPO_NAME)
[![Version](https://badge.fury.io/gh/COMPANY_NAME%2FREPO_NAME.svg)](http://badge.fury.io/gh/COMPANY_NAME%2FREPO_NAME) -->

Matchbox is a template and toolchain for building Javascript API's. It includes a series of build and testing tools, as well as references to third party services like [Travis]() and [Coveralls]() which perform helpful functions for you.

Matchbox is designed to allow you to focus on designing a developer friendly, performant API rather than wasting large amounts of time on build, test, and deploy tooling.

# How to use Matchbox

```bash
$ git clone https://github.com/mcdonamp/matchbox.git
$ cd matchbox           # go to the matchbox directory
```

## Initial Setup

### Modify `gulpfile.js`

### Mofidy `package.json`

`package.json` is important for `npm` to install the necessary development and deployment dependencies, as well as to host your package on [npmjs.org](https://www.npmjs.org).

Modify the `name`, `description`, `version`, `authors`, `homepage`, `repository`, `bugs`, `licenses`, `keywords`, `dependencies`, and `devDependencies` properties to suit your needs.

More information on the format of `package.json` can be found [here](https://www.npmjs.org/doc/files/package.json.html).

### Modify `bower.json`

`bower.json` is important for `bower` to install the necessary development and deployment dependencies, as well as to host your package on [bower.io](http://bower.io/).

Modify the `name`, `description`, `version`, `authors`, `homepage`, `repository`, `license`, `keywords`, `main`, `dependencies`, and `devDependencies` properties to suit your needs.

More information on the format of `bower.json` can be found at [npmjs.org](https://www.npmjs.org/doc/files/package.json.html).

### Modify `.jshintrc`, if desired
This file contains information about the JS linting that happens at build. Feel free to modify this file to suit your personal and/or company coding conventions.

### Set up Travis CI

### Set up Coveralls

### Modify README.md

### Licensing
Matchbox projects are already set up with an MIT license. If you desire to change this, please modify `LICENSE`, `package.json`, `bower.json`, `build/header`, `src/*`, and any other files you have added with a license header. Be sure to comply with any licensing agreements present in third party software packages.

This project is licensed under the [Firebase MIT license](http://COMPANY_NAME.mit-license.org/).

## Build and Run
Matchbox projects can be built using `gulp build` or tested using `gulp test`. Running `gulp` will both test and build the project.

`gulp watch` will watch for changes in the `/src/` directory and lint, concatenate, and minify the source files when a change occurs. The output files - `LIBRARY_NAME.js` and `LIBRARY_NAME.min.js` - are written to the `/dist/` directory.

## Development

### Modify `build/header` and `build/footer`

### Modify `src/LIBRARY_NAME.js`

### Add in new files, as necessary

### Coding Style
Our preferred code style is shown in `src/LIBRARY_NAME.js` as well as our linting process in `.jshintrc`.

We use [JSDoc](http://usejsdoc.org/) style comments and recommend that your projects incorporate them as well. In addition to providing tremendous value to developers, this style exports well and can be used to generate rich documentation easily.

## Testing

### Modify `tests/index.html`

### Modify `tests/specs/common.spec.js`

### Create specific tests for each file in `src/` as `tests/specs/file.spec.js`

## Deployment
Once you have built and tested your library, you're ready to share it with the world. Here is a quick checklist of things you should do before you deploy.

### Update SEMVER

For more information on SEMVER, check out [semver.org](http://semver.org/)

### Update `changelog.txt`

### Upload to NPM

### Upload to Bower

### Upload files to CDN or website

### Let people know about your project!

1) Tweet about it

2) Post it on HackerNews

3) Post it in the Firebase Google Group

# API's using Matchbox
  
1) [Geofire](https://github.com/firebase/geofire)


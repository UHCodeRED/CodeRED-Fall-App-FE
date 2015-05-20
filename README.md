# code-red-front-end

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli
```

## Install dependencies
Install npm dependencies 
```bash
$ npm install
```

Install bower dependencies 
```bash
$ bower install
```

##Setup
go to `app/scripts/app.js` and update the `CodeREDServerURL` factory. Simply 
update `serverURL` to the necessary URL.
```
  .factory('CodeREDServerURL', function(){
    var serverURL = 'http://localhost:3000';
    return serverURL + '/attendees/:attendeeId';
  });
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Production
Run `grunt build` and all code will be moved to `dist/` folder.

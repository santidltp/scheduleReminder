
<img src="http://meanjs.org/img/logo-small.png">  <img src="https://www.twilio.com/marketing/bundles/marketing/img/favicons/favicon.ico" height="70px" weight="70px">

Schedule reminder is an application that helps you organize some of your notes(like postits), and it will send you a text message on when you want the application to text remind you. This application was developed using [MEAN.JS](https://meanjs.org/), which is a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. In addition, this application uses [Twilio's](https://www.twilio.com/) REST API's for text messeing.


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:



### Cloning The GitHub Repository
To start running this project, clone repository.

```bash
$ git clone https://github.com/santidltp/scheduleReminder.git
```

 
## Quick Install
Once you've downloaded the source code and installed all the prerequisites, you're just a few steps away from starting to use the application.

The first thing you should do is install the Node.js dependencies. To install Node.js dependencies you're going to use npm. In the application folder run this in the command-line:

```bash
$ npm install
```

Then you will need to install bower's dependencies by running.

```bash
$ bower install
```


## Running The Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```
or
```
$ npm start
```


Your application should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)


## Testing The Application
You can run the full test suite:

```bash
$ grunt test
```

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


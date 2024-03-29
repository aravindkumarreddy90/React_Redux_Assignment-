* The point of entry for the app can be found in the 'app/scripts/main.js' file -- work from this file for your React app code
* The server with the response can be found in the 'server/app.js' file -- work from this file to complete the Node server setup
* The data can be found in the 'server/data.js' file, which is then loaded into the Node 'server/app.js' file 
* The SCSS files, which contain the SASS styling, can be found in the 'app/sass' folder
* You can alter the setup of the runtime by editing the 'gulpfile.js' file

## Getting Started

### Prerequisites

* NodeJS (v10.15.3)
* NPM (v6.9.0)

### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the Node modules with the following command:

    npm install

### Step 2 - Running the App

After installing the Node modules, you must start two locally hosted servers. The first server is the Node back end server, which runs the NodeJS files found in the './server' folder, and the second is the front end server, which runs the ReactJS app files found in the './app' folder. Both servers can be started by running the following command (make sure you’re using the correct versions of Node and NPM per the prerequisites above):

    npm run servers

This command will create a front end server at http://localhost:3030 (which should automatically open in your browser), and it will start the Node back end server at http://localhost:3035, with Nodemon, so that updates happen automatically on save. 

*Special Note for Windows Users*

On Windows systems, you may get an error like the following:

  'NODE_ENV' is not recognized as an internal or external command, operable program or batch file.
  
If so, you will need to replace any occurrences of NODE_ENV with 'SET NODE_ENV' in the package.json, and separate this command from the one that follows it with a '&', like this:
  "node-server": "SET NODE_ENV=development & nodemon server/app.js"
  
## Front End App Folder

All of the front end source code can be found in the './app' folder. A description of each subfolder is as follows:

### images

Here you can (optionally)  place images that can be processed with the npm command:

    npm run image-min

This will minify the images and put them into the '.local_server/img/' folder.

### sass

Here you will find the SCSS files, we use Sass on the project to compile down to CSS. These files will be automatically compiled upon save when you are running the standard 'npm run dev-server' command. However you can compile this yourself by running this command:

    npm run sass

### scripts

All of the Javascript can be found in here. The App uses React so all of these files are written with React JSX and compiled via Webpack. The Webpack setup can be found in the 'config/webpack.config.js' file. These files are ran with the '[@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)' and '[@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)' loaders, which will enable you to write ES2017 and React Code.

The code is all initialized from the 'app/scripts/main.js' file, so that should be your initial point of call for the App.

### third_party

Third party can be used to contain any third party libraries that you may want to use with your app. You can call a command to move all the third party items with:

    npm run third-party

### views

The views folder contains the HTML templates folder. The templates are created with the [Mustache](https://mustache.github.io/) templating language.


## Node Back End Server Folder

### app.js

The source code for the back end server can be found in the './server' folder, specifically in the app.js file.  The app.js file includes starter code for you to create your own HTTP server, which will listen on port 3035 and create a data response, loading the product data from the data.js file, in JSON format. In addition to the comments in the app.js file, review the [NodeJS http.serverResponse documentation](https://nodejs.org/api/http.html#http_class_http_serverresponse).

To start the server on its own you can run this command:

    npm run node-server

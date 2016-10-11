# Materialize Tutorial
This is my basic Materialize tutorial, the goal is to show you how to use the materialize framework.

## Getting Started 
To get started please download the materialize files from [here](http://materializecss.com/getting-started.html). If you find it easier you can also download my source code use it as we go through this tutorial. In this turotial I am going to use some of the basic functionality materialize has given us and show you how to implement it on your own site.

### Step 1:
Create a index.html page in your local directory in a folder called pulic. Take the code below and copy and place it in there to get started. Make sure the materializecss is also in the public folder in the same structure it was in when you downloaded it.

``` 
<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
      <div class="parallax-container">
            <div class="parallax"><img src="/img/background1.jpg"></div>
        </div>
          <div class="section white">
            <div class="row container">
                <h2 class="header">RubixByDeloitte</h2>
                <p class="grey-text text-darken-3 lighten-3">This is an example of parallax.</p>
            </div>
        </div>
        <div class="parallax-container">
            <div class="parallax"><img src="/img/background2.jpg"></div>
        </div>
        <!--Import jQuery before materialize.js-->
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
  </html>
```

### Step 2: 
In your console type npm init and follow the on screen instructions. Once you are done it should have created a package.json file, navigate into that file and copy and paste this into there.

```

"dependencies": {
  "express": "^4.14.0"
},

```

In the same folder under scripts copy and paste the next line of code in.

```
"start": "node server.js"

```

### Step 3:
Create a file called server.js and copy and paste the following into it. 

```
const HOST = "0.0.0.0";
const PORT = 8000;

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.use(express.static('public'));

var server = app.listen(8000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

```




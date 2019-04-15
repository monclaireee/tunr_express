console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'claireseah',
  host: '127.0.0.1',
  database: 'tunr_db',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));
app.use(express.static("public"));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

// === TEST ROUTE ===
app.get('/', (request, response) => {
  // respond with HTML page displaying "Hello World!"
  response.render('home');
});

// app.get('/new', (request, response) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('new');
// });

/* === INDEX FEATURE ===
Build the index feature for artists. 
  - Basically what you want to be able to do is create a route that when called, prints out the artist table as is. */
app.get('/artists', (req, res) => {
  let queryString = "SELECT * FROM artists";
  pool.query(queryString, (errObj, result) => {
    let obj;
    if (errObj === undefined) {
     obj = { data:result.rows }; 
   } else {
    console.error("query error:", errorObj.stack);
    result.send("query error");
   }
   response.render("home", obj);
  });
});

/* === CREATE FEATURE ===
Construct a new route that allows the user to create a new entry for an artist's information and add it to the exising lists. */
app.get('/artist/create', (req, res) => {
  let obj = {};
  response.render("create-artist", obj);
});

app.post("/artist/create/add", (req, res) => {
  objToSend = {};
  console.log(request.body);
  let queryString = 
    "INSERT INTO artists" +
    "(name, photo_url, nationality)" +
    "VALUES" +
    "('" +
    request.body.name +
    "', '" +
    request.body.photo_url +
    "', '" +
    request.body.nationality +
    "')";

  pool.query(queryString, (errObj, result) => {
    if (errObj === undefined) {
    } else {
      console.error("query error:", errObj.stack);
      result.send("query error");
    }
  });
}) ;

/* === SHOW FEATURE ===
Construct a route that shows you the details for only a specific artists depending on the entry of their id. */
app.get('/artists/:id', (req, res) => {
  const queryString = "SELECT * FROM artists WHERE id = " + request.params.id;
  pool.query(queryString, (errObj, result) => {
    let queryString2 = "SELECT * FROM songs WHERE artist_id = " + request. params.id;
    pool.query(queryString2, (errorObj2, result2) => {
      let obj = {};
      if (errorObj2 === undefined) {
        obj["songs"] = result2.rows;
      } else {
        console.error("query error:", errorObj2.stack);
        result2.send("query error");
      }

      if (errObj === undefined) {
        obj["artist"] = result.rows;
      } else {
        console.error("query error:", errObj.stack);
        result.send("query error");
      }
      response.render("artists", obj);
    });
  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){
  
  console.log("closing");
  
  server.close(() => {
    
    console.log('Process terminated');
    
    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);

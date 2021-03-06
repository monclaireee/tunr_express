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
 * Routes for Artists
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
app.get('/artists/', (request, response) => {
  const queryString = "SELECT * FROM artists";

  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
        console.log(errorObj.stack);
        response.send("query error test 1");
    } else {
        const data = { artists: result.rows };
        response.render( "artist_index", data );
    }
  })
});


/* === CREATE FEATURE ===
Construct a new route that allows the user to create a new entry for an artist's information and add it to the exising lists. */
app.get('/artists/new', (request, response) => {
   response.render("artist_create");
})


app.post('/artists', (request, response) => {

    console.log(request.body);
    const queryString = "INSERT INTO artists (name, photo_url, nationality) VALUES ($1, $2, $3)";

    const values = [request.body.name, request.body.photo_url, request.body.nationality];

    pool.query(queryString, values, (errorObj, result) => {
        if(errorObj) {
            console.log(errorObj.stack);
            response.send("query error test 2");
        } else {
            response.send("A new artist has been added!" + "<br><br><a href=/artists/>Home</a>");
        }
    })
})

/* === EDIT FEATURE ===
Create a route that allows you to edit existing entries in the database. */
app.get('/artists/:id/edit', (request, response) => {

    const queryString = "SELECT * FROM artists WHERE id=" + request.params.id;

    pool.query(queryString, (errorObj, result) => {
        if(errorObj) {
            console.log(errorObj.stack);
            response.send("query error test 3");
        } else {
            const data = { artist: result.rows }
            response.render("artist_edit", data );
        }
    })
});

 app.put('/artists/:id', (request, response) => {

        const queryString = "UPDATE artists SET name = $1, photo_url=$2, nationality=$3 WHERE id=$4";

        const values = [request.body.name, request.body.photo_url, request.body.nationality, request.params.id];

        pool.query(queryString, values, (errorObj, result) => {
            if(errorObj) {
                console.log(errorObj.stack);
                response.send("query error test 4");
            } else {
                response.send("Artist has been edited!" + "<br><br><a href=/artists/>Home</a>");
            }
        })
  });

/* === SHOW FEATURE ===
Construct a route that shows you the details for only a specific artists depending on the entry of their id. */
app.get('/artists/:id', (request, response) => {
  // query database for all pokemon

  const artistId = request.params.id;

  const queryString = "SELECT * FROM artists WHERE id=" + artistId;

  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
        console.log(errorObj.stack);
        response.send("query error");
    } else {
        const data = { artist: result.rows }
        response.render( "artist_show", data );
    }
  })
});

/* === DELETE FEATURE ===
Construct a route that allows you to remove entries (instead of just editing existing entries) completely. */
app.get('/artists/:id/delete',(request, response) => {

    const queryString = "SELECT * FROM artists WHERE id=" + request.params.id;

    pool.query(queryString, (errorObj, result)=> {
        if(errorObj) {
            console.log(errorObj.stack);
            respons.send("query error test 5");
        } else {

            const data = { artist: result.rows };
            response.render("artist_delete", data);
        }
    })
});


app.delete('/artists/:id', (request, response) => {
  const queryString = "DELETE from artists WHERE id =" + request.params.id;
    pool.query(queryString, (errorObj, result) => {
      if(errorObj) {
        console.log(errorObj.stack);
        response.send("query error test 6");
      } else {
        response.send("Artist has been deleted!" +"<br><br><a href=/artists/>Home</a>");
      }
    })
});

/**
 * ===================================
 * Routes for Songs
 * ===================================
 */

/* === TEST ROUTE === */
app.get('/', (req, res) => {
  response.render('home');
})

/* === INDEX FEATURE ===
Create a sql query for the songs db so that all songs can be displayed. */
app.get('/songs/', (request, response) => {
  const queryString = "SELECT * FROM songs ORDER BY id";
  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 7");
    } else {
      const data = { songs: result.rows }
      response.render( "song_index", data );
    }
  })
});

/* === CREATE FEATURE ===
Create a route that allows you to push new entries into the artists db. */
app.get('/songs/new', (request, response) => {
   response.render("song_create");
})

app.post('/songs', (request, response) => {
  console.log(request.body);
  const queryString = "INSERT INTO songs (title, album, preview_link, artwork, artist_id) VALUES ($1, $2, $3, $4, $5)";
  const values = [request.body.title, request.body.album, request.body.preview_link, request.body.artwork, request.body.artist_id];
    pool.query(queryString, values, (errorObj, result) => {
      if(errorObj) {
        console.log(errorObj.stack);
        response.send("query error test 8");
      } else {
        response.send("A new song has been added!" + "<br><br><a href=/songs/>Home</a>");
      }
    })  
})

/* === EDIT FEATURE ===
Create a new route that allows you to edit existing entries in the db. */
app.get('/songs/:id/edit', (request, response) => {
  const queryString = "SELECT * FROM songs WHERE id=" + request.params.id;
  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 9");
    } else {
      const data = { song: result.rows }
      response.render("song_edit", data );
        }
    })
});

app.put('/songs/:id', (request, response) => {
  const queryString = "UPDATE songs SET title=$1, album=$2, preview_link=$3, artwork=$4, artist_id=$5 WHERE id=$6";
  const values = [request.body.title, request.body.album, request.body.preview_link, request.body.artwork, request.body.artist_id, request.params.id];
  pool.query(queryString, values, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 10");
    } else {
      response.send("Song has been edited!" + "<br><br><a href=/songs/>Home</a>");
    }
  })
});

/* === DELETE FEATURE ===
Create a new route that allows you to delete existing entries in the db. */
app.get('/songs/:id/delete',(request, response) => {
  const queryString = "SELECT * FROM songs WHERE id=" + request.params.id;
  pool.query(queryString, (errorObj, result)=> {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 11");
    } else {
      const data = { song: result.rows };
      response.render("song_delete", data);
    }
  })
});

app.delete('/songs/:id', (request, response) => {
  const queryString = "DELETE from songs WHERE id =" + request.params.id;
  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 12");
    } else {
      response.send("Song has been deleted!" +"<br><br><a href=/artists/>Home</a>");
    }
  })
});

/* === VIEW FEATURE ===
Create a route that allows you to view the requested songs user inputs. */
app.get('/songs/:id', (request, response) => {
  console.log(request.params.id);
  const songId = request.params.id;
  const queryString = "SELECT * FROM songs WHERE id=" + songId;
  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 13");
  } else {
      const data = { song: result.rows }
      response.render( "song_show", data);
  }
})

/**
 * ===================================
 * Routes for Artists' Songs
 * ===================================
 */

// === TEST ROUTE ===
app.get('/', (req, res) => {
  response.render('home');
})

/* === SHOW FEATURE (FIND SONGS FOR SPECIFIC ARTIST) ===
Create a route that shows you the specific artist's songs. */
app.get('/artist/:id/songs', (request, response) => {
  const artistId = request.params.id;
  const queryString = "SELECT * FROM songs WHERE artist_id=" + artistId;
  pool.query(queryString, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 14");
  } else {
      const data = { songs: result.rows };
      response.render( "artist_song_list_show", data );
    }
  })
});

/* === CREATE FEATURE (CREATE A NEW SONG FOR AN ARTIST) ===
Create a route that creates a new entry for an artist's song. */
app.get('/artist/:id/songs/new', (request, response) => {
  const artist_id = request.params.id;
  const data = { idKey : artist_id };
  response.render("artist_song_list_create", data);
})


app.post('/artist/:id/songs', (request, response) => {
  const artist_id = request.params.id;
  console.log(request.body);
  const queryString = "INSERT INTO songs (title, album, preview_link, artwork, artist_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [request.body.title, request.body.album, request.body.preview_link, request.body.artwork, artist_id];
  pool.query(queryString, values, (errorObj, result) => {
    if(errorObj) {
      console.log(errorObj.stack);
      response.send("query error test 15");
    } else {
      response.send("A new song has been added for artist with artist_id=" + artist_id + "<br><br><a href=/artists/>Home</a>");
    }
  })
})

/**
 * ===================================
 * Routes for Playlists
 * ===================================
 */
 
// === TEST ROUTE ===
app.get('/', (req, res) => {
  response.render('home');
})

/* === LIST FEATURE ===
Create a route that lists all the playlists. */
app.get('/playlist', (req, res) =>{
  const queryString = 'SELECT * FROM playlists';
  pool.query(queryString, (errorObj, result) => {
    if (errorObj) {
      console.log(errorObj.stack);
      res.send("query error test 16");
    } else {
      console.log(result.rows);
      const data = { playlists : result.rows }
      res.render("playlist_index", data);
    }
  })
})

/* === CREATE FEATURE ===
Create a new playlist */
app.get('/playlist/new', (req, res) => {
  res.render('playlist_create');
})

app.post('/playlist', (req, res) => {
  console.log(req.body);
  const queryString = 'INSERT INTO playlists (playlist_name) VALUES ($1) RETURNING *';
  const values = [req.body.name];
  pool.query(queryString, values, (errorObj, result) => {
    if (errorObj) {
      console.log(errorObj.stack);
      res.send("query error test 17");
    } else {
      res.send("Added a new playlist!" + "<br><br><a href=/playlist>Home</a>");
    }
  })
})

/* === SHOW FEATURE ===
Show all songs in the playlist. */
app.get('/playlist/:id', (req, res) => {
  const playlistId = req.params.id;
  const queryString1 = `SELECT playlists_songs.playlist_id, songs.title, songs.album
        FROM songs INNER JOIN playlists_songs ON (playlists_songs.songs_id = songs.id) WHERE playlists_songs.playlist_id =${playlistId};`
  pool.query(queryString1, (errorObj, result1) => {
    if (errorObj) {
      console.log(errorObj.stack);
      res.send('query error test 18');
    } else {
      let data1 = result1.rows;
      const queryString2 = `SELECT * FROM playlists WHERE id =${playlistId};`
      pool.query(queryString2, (errorObj, result2) => {
        if (errorObj) {
          console.log(errorObj.stack);
          res.send('query error test 19');
        } else {
          let data2 = result2.rows;
          let data = (key1: data1, key2: data2);
          res.render("playlist_songs", data);
        }
      })
    }
  })
})

app.post('/playlist/:id', (req, res) => {
  const playlistId = req.params.id;
  const queryString = "INSERT INTO playlists_songs (playlist_id, songs_id) VALUES ($1, $2) RETURNING *";
  const values = [playlistId, req.body.songs_id];
  pool.query(queryString, values, (errorObj, result) => {
    if (errorObj) {
      console.log(errorObj.stack);
      res.send('query error test 20');
    } else {
      res.redirect('/playlist' + playlistId);
    }
  })
})

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

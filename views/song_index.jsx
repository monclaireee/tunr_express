var React = require("react");

class SongIndex extends React.Component {
    render() {
        // let data = this.props.artists;
        // console.log("home.jsx", data);
        const all_songs = this.props.songs.map(song => {
            return (
                <React.Fragment>
                <h1>{ song.title }</h1>
                <h2>{ song.album }</h2>
                <a href={ song.preview_link }>Hear Me Out!</a>
                <img src={ song.artwork } style={{display: 'inline-block', width: '40%', height: '50%'}} />
                <h2></h2>
                <a href={`/artists/${ song.artist_id }`} class="btn btn-info">View artist</a>
                <br/>
                <span>
                <a href={`/songs/${song.id}`} class="btn btn-primary">View song</a>&nbsp;&nbsp;&nbsp;
                <a href={`/songs/${song.id}/edit`} class="btn btn-warning">Edit song</a>&nbsp;&nbsp;&nbsp;
                <a href={`/songs/${song.id}/delete`} class="btn btn-danger">Delete song</a>
                </span>
                <br/><br/><br/><br/>
                </React.Fragment>
            )
        })

        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/indexstyle.css"/>
                <title>Index Page</title>
            </head>
        <body>
          <div class="content">
          <h1 style={{ 'text-decoration': 'underline' }}>Songs!</h1>
          <span>
          <a href={"/songs/new"} class="btn btn-success">Create new song</a>
          </span>
          <br/><br/>
          { all_songs }
          </div>
        </body>
      </html>
        );
    }
}

module.exports = SongIndex; 
     

var React = require("react");

class ArtistSongListShow extends React.Component {
    render() {

        const songs_of_artist = this.props.songs.map(song => {
            return (
                <React.Fragment>
                <li>{ song.title}</li>
                <li>{ song.album }</li>
                <li><a href={ song.preview_link }>Hear Me Out!</a></li>
                <li><img src={ song.artwork } style={{display: 'inline-block', width: '40%', height: '50%'}} /></li>
                <li>artist id: { song.artist_id }</li>
                <br/><br/>
                </React.Fragment>
                )
        })


        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/showstyle.css"/>
                <title>Show Artist's Songs Page</title>
            </head>
        <body>
          <div class="content">
                <ul>
                    { songs_of_artist }
                </ul>
                <br/>
                <span>
                <a href={`/artists/`} class="btn btn-success">Artists Homepage</a>&nbsp;&nbsp;&nbsp;
                <a href={`/songs/`} class="btn btn-primary">Songs Homepage</a>
                </span>
          </div>
        </body>
      </html>
        );
    }
}

module.exports = ArtistSongListShow; 

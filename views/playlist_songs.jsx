var React = require("react");

class PlayListSongs extends React.Component {
    render() {

        let actionAttribute = `/playlist/${this.props.key1[0].playlist_id}`;

        console.log("HERE HERE HERE:", this.props.key1);
        console.log("HERE HERE HERE LA:", this.props.key2[0].playlist_name);

        const all_songs_of_playlist = this.props.key1.map(song => {
            return (
                    <React.Fragment>
                    <div>
                    <li>{song.title} from {song.album}</li>
                    </div>
                    </React.Fragment>

                )
        })

        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/indexstyle.css"/>
                <title>Playlist Songs Page</title>
            </head>
        <body>
          <div class="content">
            Playlist Name: <input type="text" name="playlist_name" value={this.props.key2[0].playlist_name} />
            <br/><br/>
            Songs: <span>{ all_songs_of_playlist }</span>
             <br/><br/>
            <form method="POST" action={actionAttribute}>
            Enter Song Id: <input type="text" name="songs_id"/> <br/><br/>
            <input type="submit" class="btn btn-primary" value="Add Song"/>
            </form>
          </div>
        </body>
      </html>
        );
    }
}

module.exports = PlayListSongs;
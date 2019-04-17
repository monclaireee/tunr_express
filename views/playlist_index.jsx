var React = require("react");

class PlayListIndex extends React.Component {
    render() {
        // let data = this.props.artists;
        // console.log("home.jsx", data);
        const all_playlists = this.props.playlists.map(playlist => {
            return (
                <React.Fragment>
                <h1>{ playlist.playlist_name }</h1>
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
          <h1 style={{ 'text-decoration': 'underline' }}>Playlists!</h1>
          <span>
          <a href={"/playlist/new"} class="btn btn-success">Create new playlist</a>
          </span>
          <br/><br/>
          { all_playlists }
          </div>
        </body>
      </html>
        );
    }
}

module.exports = PlayListIndex; 
     

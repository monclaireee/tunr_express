var React = require("react");

class SongShow extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/showstyle.css"/>
                <title>Show Page</title>
            </head>
        <body>
          <div class="content">
                <h1>{ this.props.song[0].title }</h1>
                <h2>{ this.props.song[0].album }</h2>
                <h2>{ this.props.song[0].artist_id }</h2>
                <a href={ this.props.song[0].preview_link }>Hear Me Out!</a>
                <img src={ this.props.song[0].artwork } style={{display: 'inline-block', width: '40%', height: '50%'}} />
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

module.exports = SongShow; 

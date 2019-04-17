var React = require('react');

class SongDelete extends React.Component {
    render() {

        let actionAttribute = `/songs/${this.props.song[0].id}?_method=DELETE`;

        return (
            <html>
            <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/deletestyle.css"/>
            <title>Delete Page</title>
            </head>

            <body>

            <div class="container">
            <h1>DELETE song</h1>
            <br/>
            <form method="POST" action={actionAttribute}>
            <div>Title: {this.props.song[0].title}</div><br/>
            <div>Album: {this.props.song[0].album}</div><br/>
            <a href={ this.props.song[0].preview_link }>Hear Me Out!</a><br/><br/>
            <div>Artist Id: {this.props.song[0].artist_id}</div><br/>
            <img id="eachImage" style={{display: 'inline-block', width: '40%', height: '50%'}} src={this.props.song[0].artwork}/><br/>
            <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={`/songs/`} class="btn btn-danger">Back</a>
            </form>
            </div>

            </body>
            </html>
            );
    }
}

module.exports = SongDelete; 
     

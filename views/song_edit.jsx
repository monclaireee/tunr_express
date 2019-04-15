var React = require('react');

class Edit extends React.Component {
    render() {

        let actionAttribute = `/songs/${this.props.song[0].id}?_method=PUT`;

        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/editstyle.css"/>
                <title>Edit Page</title>
            </head>

        <body>

            <div class="container">
                <h1>Edit song</h1><br/>
                <form method="POST" action={actionAttribute}>
                Edit title: <input type="text" name="title" value={this.props.song[0].title} /> <br/><br/>
                Edit album: <input type="text" name="album" value={this.props.song[0].album} /> <br/><br/>
                Edit preview link: <input type="text" name="preview_link" value={this.props.song[0].preview_link} /> <br/><br/>
                Edit artwork: <input type="text" name="artwork" value={this.props.song[0].artwork} /> <br/><br/>
                  Edit artist id: <input type="text" name="artist_id" value={this.props.song[0].artist_id} /> <br/><br/>
                <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={`/songs`} class="btn btn-danger">Back</a>
                </form>
                </div>

        </body>
        </html>
        );
    }
}

module.exports = Edit; 
     

var React = require('react');

class ArtistEdit extends React.Component {
    render() {

        let actionAttribute = `/artists/${this.props.artist[0].id}?_method=PUT`;

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
                <h1>Edit artist</h1><br/>
                <form method="POST" action={actionAttribute}>
                Edit name: <input type="text" name="name" value={this.props.artist[0].name} /><br/><br/>
                Edit photo url: <input type="text" name="photo_url" value={this.props.artist[0].photo_url} /><br/><br/>
                Edit nationality: <input type="text" name="nationality" value={this.props.artist[0].nationality} /><br/><br/>
                <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={`/artists`} class="btn btn-danger">Back</a>
                </form>
                </div>

        </body>
        </html>
        );
    }
}

module.exports = ArtistEdit; 
     

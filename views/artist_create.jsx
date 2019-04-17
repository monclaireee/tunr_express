var React = require('react');

class ArtistCreate extends React.Component {
    render() {

        let actionAttribute = `/artists`;

        return (
            <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/createstyle.css"/>
                <title>Create Page</title>
            </head>

        <body>

            <div class="container">
                <h1>Create a new artist</h1><br/>
                <form method="POST" action={actionAttribute}>
                Enter name: <input type="text" name="name"/><br/><br/>
                Enter photo url: <input type="text" name="photo_url"/><br/><br/>
                Enter nationality: <input type="text" name="nationality"/><br/><br/>
                <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={`/artists`} class="btn btn-danger">Back</a>
                </form>
                </div>

        </body>
        </html>
        );
    }
}

module.exports = ArtistCreate; 
     

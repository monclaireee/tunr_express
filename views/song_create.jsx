var React = require('react');

class Create extends React.Component {
    render() {

        let actionAttribute = `/songs`;

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
                <h1>Create a new song</h1><br/>
                <form method="POST" action={actionAttribute}>
                Enter title: <input type="text" name="title"/><br/><br/>
                Enter album: <input type="text" name="album"/><br/><br/>
                Enter preview link: <input type="text" name="preview_link"/><br/><br/>
                Enter artwork: <input type="text" name="artwork"/><br/><br/>
                Enter preview link: <input type="text" name="preview_link"/><br/><br/>
                Enter artist id: <input type="text" name="artist_id"/><br/><br/>
                <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={`/songs`} class="btn btn-danger">Back</a>
                </form>
                </div>

        </body>
        </html>
        );
    }
}

module.exports = Create; 
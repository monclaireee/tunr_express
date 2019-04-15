var React = require("react");

class Show extends React.Component {
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
          <div class="artists">
          <h1>{ this.props.artist[0].name }</h1>
                <h2>{ this.props.artist[0].nationality }</h2>
                <img src={ this.props.artist[0].photo_url } style={{display: 'inline-block', width: '40%', height: '50%'}} />
                <br/>
                <a href={`/artists/`} class="btn btn-danger">Back</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;
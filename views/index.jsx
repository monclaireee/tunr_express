var React = require("react");

class Index extends React.Component {
  render() {
    let data = this.props.artists;
    console.log("home.jsx", data);
    const all_artists = this.props.artists.map( artist => {
        return (
            <React.Fragment>
                <h1>{ artist.name }</h1>
                <h2>{ artist.nationality }</h2>
                <img src={ artist.photo_url } style={{display: 'inline-block', width: '40%', height: '50%'}} />
                <br/>
                <a href={`/artists/${artist.id}`} class="btn btn-primary">View Artist</a>
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
                <title>Tunr_Express</title>
            </head>
        <body>
          <div class="artists">
          <h1 style={{ 'text-decoration': 'underline' }}>Artists!</h1>
          { all_artists }
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index; 
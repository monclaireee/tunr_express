var React = require("react");

class Index extends React.Component {
  render() {
    let data = this.props.data;
    let arttistHTML = data.map (artist => {
      return (
         <tr key={artist.id}>
          <th scope="row">{artist.id}</th>
          <td>{artist.name}</td>
          <td>{artist.photo_url}</td>
          <td>{artist.nationality}</td>
          <td>
          <form action={"/artist/"+artist.id} method="get">
          <button type="submit">View</button>
          </form>
          </td>
        </tr>
      );
    });
  });
});

module.exports = Index;
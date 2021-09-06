import React, { Component } from "react";

class Filtering extends Component {
  render() {
    const {genres, selectedGenre, onClickGenre} = this.props;
    return (
      <div className="col-2">
        <ul class="list-group">
          {genres.map((genre) => (
            <li className={selectedGenre === genre.name ? `list-group-item active`: `list-group-item`} key={genre.id} onClick={()=>onClickGenre(genre.name)}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filtering;

import { Component } from "react";
import Pagination from "../common/pagination.component";

class Movies extends Component {
  state = {
    movies: [
      {
        title: "The Shawshank Redemption",
        rank: "1",
        id: "1",
        rating: 5,
      },
      {
        title: "The Godfather",
        rank: "2",
        id: "2",
        rating: 5,
      },
      {
        title: "The Godfather: Part II",
        rank: "3",
        id: "3",
        rating: 5,
      },
      {
        title: "Pulp Fiction",
        rank: "4",
        id: "4",
        rating: 5,
      },
      {
        title: "The Good, the Bad and the Ugly",
        rank: "5",
        id: "5",
        rating: 5,
      },
      {
        title: "The Dark Knight",
        rank: "6",
        id: "6",
        rating: 5,
      },
      {
        title: "12 Angry Men",
        rank: "7",
        id: "7",
        rating: 5,
      },
      {
        title: "Schindler's List",
        rank: "8",
        id: "8",
        rating: 5,
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        rank: "9",
        id: "9",
        rating: 5,
      },
      {
        title: "Fight Club",
        rank: "10",
        id: "10",
        rating: 5,
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        rank: "11",
        id: "11",
        rating: 5,
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        rank: "12",
        id: "12",
        rating: 5,
      },
      {
        title: "One Flew Over the Cuckoo's Nest",
        rank: "13",
        id: "13",
        rating: 5,
      },
      {
        title: "Inception",
        rank: "14",
        id: "14",
        rating: 5,
      },
      {
        title: "Goodfellas",
        rank: "15",
        id: "15",
        rating: 5,
      },
      {
        title: "Star Wars",
        rank: "16",
        id: "16",
        rating: 5,
      },
      {
        title: "Seven Samurai",
        rank: "17",
        id: "17",
        rating: 5,
      },
      {
        title: "Forrest Gump",
        rank: "18",
        id: "18",
        rating: 5,
      },
    ],
    activePage: 1,
    pageCount: 5,
  };

  handleClickPage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  render() {
    const { movies, activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const updatedMovies = movies.slice(start, start + pageCount);

    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Rating</th>
              <th scope="col">Your Rating</th>
            </tr>
          </thead>
          <tbody>
            {updatedMovies.map((movie) => {
              return (
                <tr>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.title}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.your_rating ? "Rated" : "Unrated"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalItems={movies.length}
          activePage={activePage}
          pageCount={pageCount}
          onClickPage={this.handleClickPage}
        />
      </>
    );
  }
}

export default Movies;

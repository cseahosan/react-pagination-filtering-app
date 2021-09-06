import { Component } from "react";
import Filtering from "../common/filtering.component";
import Pagination from "../common/pagination.component";
import { getGenres, getMovies } from "../services/movies.service";

class Movies extends Component {
  state = {
    movies: getMovies(),
    activePage: 1,
    pageCount: 5,
    genres: [{ name: "All Genres" }, ...getGenres()],
    selectedGenre: "All Genres",
  };

  handleClickPage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  paginateMovies = () => {
    const { movies, activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginatedMovies = movies.slice(start, start + pageCount);
    return paginatedMovies;
  };

  handleClickGenre = (genre) => {
    console.log(genre);
    this.setState({ ...this.state, selectedGenre: genre });
  };

  render() {
    const movies = this.paginateMovies();

    return (
      <>
        <div className="row">
          <Filtering
            genres={this.state.genres}
            onClickGenre={this.handleClickGenre}
            selectedGenre={this.state.selectedGenre}
          />
          <div className="col-10">
            <h2> Showing {movies.length} Movies</h2>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Poster</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Your Rating</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => {
                  return (
                    <tr>
                      <th scope="row">
                        <img
                          style={{ width: "30px", height: "auto" }}
                          src={movie.posterurl}
                          alt="imag"
                        />
                      </th>
                      <td>{movie.title}</td>
                      <td>
                        <i class="bi bi-star"></i>
                        {movie.rating}
                      </td>
                      <td>
                        {movie.your_rating ? (
                          <i class="bi bi-star-fill"></i>
                        ) : (
                          <i class="bi bi-star"></i>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              totalItems={this.state.movies.length}
              activePage={this.state.activePage}
              pageCount={this.state.pageCount}
              onClickPage={this.handleClickPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;

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

  paginateMovies = (filtered) => {
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginatedMovies = filtered.slice(start, start + pageCount);
    return paginatedMovies;
  };

  handleClickGenre = (genre) => {
    this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
  };

  filterMovies = () => {
    const { movies, selectedGenre } = this.state;

    const filteredMovies = movies.filter((movie) => {
      if (selectedGenre === "All Genres") return true;

      if (movie.genres.includes(selectedGenre)) return true;
      return false;
    });
    return filteredMovies;
  };

  render() {
    const filtered = this.filterMovies();
    const movies = this.paginateMovies(filtered);
    return (
      <>
        <div className="row">
          <Filtering
            filteredItems={this.state.genres.map((genre, idx) => ({
              _id: idx,
              name: genre.name,
            }))}
            onClick={this.handleClickGenre}
            selectedItem={this.state.selectedGenre}
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
                        {movie.imdbRating}
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
            {filtered.length > this.state.pageCount && (
              <Pagination
                totalItems={filtered.length}
                activePage={this.state.activePage}
                pageCount={this.state.pageCount}
                onClickPage={this.handleClickPage}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Movies;

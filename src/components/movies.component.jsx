import _ from "lodash";
import { Component } from "react";
import Filtering from "../common/filtering.component";
import Pagination from "../common/pagination.component";
import MoviesTable from "../components/movies-table.component";
import { getGenres, getMovies } from "../services/movies.service";

class Movies extends Component {
  state = {
    movies: getMovies(),
    activePage: 1,
    pageCount: 5,
    genres: [{ name: "All Genres" }, ...getGenres()],
    selectedGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
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

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;

    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  render() {
    const filtered = this.filterMovies();

    const sorted = this.sortMovies(filtered);

    const movies = this.paginateMovies(sorted);

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

            <MoviesTable
              movies={movies}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />

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

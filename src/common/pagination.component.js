import _ from 'lodash';
import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const {totalItems, pageCount, activePage, onClickPage} = this.props;
    const totalPages = Math.ceil(totalItems/pageCount);
    const pages = _.range(1, totalPages, 1); // [1, 2, 3, .................]
    return (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <span className="page-link">
                Previous
              </span>
            </li>
            {
                pages.map((page)=>{
                    return(
                        <li className={activePage == page ? 'page-item active' : 'page-item'} onClick={()=>onClickPage(page)}>
                            <span className="page-link">{page}</span>
                        </li>
                    )
                })
            }
            <li className="page-item">
              <span className="page-link">
                Next
              </span>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Pagination;

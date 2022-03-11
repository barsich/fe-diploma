import { Link } from 'react-router-dom';

// TODO custom
function Pagination() {
  return (
    <div className="pagination">
      <Link to="#" className="pagination__item pagination__prev">
        <svg
          width="18"
          height="29"
          viewBox="0 0 18 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pagination__prev__svg-path"
            d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z"
            fill="#928F94"
          />
        </svg>
      </Link>
      <Link to="#" className="pagination__item">
        1
      </Link>
      <Link to="#" className="pagination__item">
        2
      </Link>
      <Link to="#" className="pagination__item">
        3
      </Link>
      <Link to="#" className="pagination__item pagination__between">
        ...
      </Link>
      <Link to="#" className="pagination__item">
        10
      </Link>
      <Link to="#" className="pagination__item pagination__next">
        <svg
          width="18"
          height="29"
          viewBox="0 0 18 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pagination__next__svg-path"
            d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z"
            fill="#928F94"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Pagination;

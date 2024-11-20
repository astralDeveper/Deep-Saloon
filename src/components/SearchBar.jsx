import React from "react";

const SearchBar = () => {
  return (
    <form className="w-[90%] mx-auto">
      <div className="flex">
        {/* Dropdown button */}
        <button
          id="dropdown-button"
          className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-200 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All
          <svg
            className="w-2.5 h-2.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Search input */}
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-none border-t border-b border-gray-300 focus:ring-2 focus:outline-none"
          placeholder="Search what you want"
          required
        />

        {/* Search button */}
        <button
          type="submit"
          className="flex-shrink-0 p-2.5 text-sm font-medium text-white bg-gray-800 rounded-e-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

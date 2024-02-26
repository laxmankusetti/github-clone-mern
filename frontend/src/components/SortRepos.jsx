const SortRepos = ({ onSort, sortType }) => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "recent" ? "border-blue-500" : ""
        }`}
        onClick={() => {
          onSort("recent");
        }}
      >
        Most Recent
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "stars" ? "border-blue-500" : ""
        }`}
        onClick={() => {
          onSort("stars");
        }}
      >
        Most Stars
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "forks" ? "border-blue-500" : ""
        }`}
        onClick={() => {
          onSort("forks");
        }}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;

//LITTLE COMPLEX VERSION---

// const buttons = [
//   { type: "recent", text: "Most recent" },
//   { type: "stars", text: "Most stars" },
//   { type: "forks", text: "Most forks" },
// ];

// buttons.map((btn) => (
//   <button
//     key={btn.type}
//     className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
//       sortType === btn.type ? "border-blue-500" : ""
//     }`}
//   >
//     {btn.text}
//   </button>
// ));

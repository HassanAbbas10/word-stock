import BookCard from "@/components/BooksCards/BookCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [bookSearch, setBookSearch] = useState("");

  const inputHandler = (e) => {
    const searchQuery = e.target.value;
    setBookSearch(searchQuery);
  };

  const api = import.meta.env.VITE_API_KEY;
  const [booksData, setBooks] = useState([]);

  useEffect(() => {
    const fetchbooks = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=${api}`
      );
      setBooks(res.data.items);
    };
    if (bookSearch) {
      fetchbooks();
    }
  }, [bookSearch]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-10">
          <span className="text-xl lg:text-2xl font-rubik italic mb-3">
            Search Your Favorite Books Here
          </span>
          <form className="max-w-sm mt-2">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Books"
                value={bookSearch}
                onChange={inputHandler}
                className="w-full py-3 pl-12 pr-4  border-indigo-600 font-playwrite text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-red-500"
              />
            </div>
          </form>
        </div>
      </div>
      {console.log(bookSearch)}

      {inputHandler ? (
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5">
          {booksData.map((data, index) => (
            <section key={index}>
              <div className="flex flex-col h-full w-48 bg-white shadow-xl shadow-slate-500 rounded-xl duration-500 hover:scale-105 hover:shadow-x border border-blue-500 ">
                <a href="#" className="flex flex-col flex-grow">
                  <img
                    src={
                      data.volumeInfo.imageLinks?.thumbnail ||
                      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiapwe.org%2Fwp-content%2Fuploads%2F2017%2F04%2Fclassic-novels.jpg&f=1&nofb=1&ipt=c4140fcc33323603a3da9d6c959571996a93fd0302eea06e1ddec9082ee9ea8c&ipo=images"
                    }
                    alt={data.volumeInfo?.title || "Book Image"}
                    className="h-48 w-36 object-fill ml-6 border-b-violet-600 border"
                  />
                  <div className="px-4 py-1.5 w-42 flex flex-col flex-grow">
                    <span className="text-gray-600 mr-3 text-xs py-0.5">
                      <span className="text-md pr-0.5 text-red-600 text-pretty">
                        Name:{" "}
                      </span>
                      <span className="italic text-pretty font-rubik">
                        {data.volumeInfo.title}
                      </span>
                    </span>
                    <span className="text-gray-600 mr-3 text-xs py-0.5">
                      <span className="text-md pr-0.5 text-red-600 text-pretty font-rubik">
                        Authors:{" "}
                      </span>
                      <span className="italic text-pretty font-rubik">
                        {data.volumeInfo.authors}
                      </span>
                    </span>
                    <span className="text-gray-600 mr-3 text-xs py-0.5">
                      <span className="text-md pr-0.5 text-pretty text-red-600 ">
                        Category:{" "}
                      </span>
                      <span className="italic text-pretty font-rubik">
                        {data.volumeInfo?.categories || "Unknown"}
                      </span>
                    </span>
                    <div className="ml-auto mt-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          ))}
        </div>
      ) : null}
      {!bookSearch && <BookCard />}
    </div>
  );
};

export default Categories;

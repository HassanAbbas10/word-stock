import axios from "axios";
import { useEffect, useState } from "react";
import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";

const BookCard = () => {
  const api = import.meta.env.VITE_API_KEY;
  const [booksData, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        let Books = [];
        let startIndex = 0;
        const maxSearch = 20; //Aik time me kitny items ko search karna hai
        while (startIndex < 60) {
          const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=novel&key=${api}&maxResults=${maxSearch}&startIndex=${startIndex}`
          );
          Books = [...Books, ...res.data.items];
          startIndex += maxSearch;
        }
        setBooks(Books);
        setLoading(false);
      } catch (error) {
        console.error(error, "Bro api is not working Skill issue LOL 🤣");
        setLoading(false);
      }
    };
    fetchbooks();
  }, []);
  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-2xl text-orange-400">
        {" "}
        <div className="flex items-center justify-center flex-col">
          <LottieAnimation />
          LOADING
        </div>
      </div>
    );
  }

  return (
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
                  <span className="text-md pr-0.5 text-red-600 text-pretty font-rubik">Authors: </span>
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
  );
};

export default BookCard;

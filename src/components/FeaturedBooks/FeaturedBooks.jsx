import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedBooks = () => {
  const [booksData, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        let Books = [];
        let startIndex = 0;
        const maxSearch = 8;

        while (startIndex < 8) {
          const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=novel&maxResults=${maxSearch}&startIndex=${startIndex}`
          );
          Books = [...Books, ...res.data.items];
          startIndex += maxSearch;
        }
        setBooks(Books);
        setLoading(false);
      } catch (error) {
        console.error("Skill issue lol😂".error);
        setLoading(false);
      }
    };
    fetchbooks();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-2xl text-orange-400">
        LOADING
        <span className="animate-spin">🎃</span>
      </div>
    );
  }

  return (
    <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-y-20 gap-x-8 mt-10 mb-5">
      {booksData.map((data, index) => (
        <section key={index} className="flex items-start gap-4 flex-start">
          <div className="w-[5.6875rem] h-[8.75rem] bg-cover bg-no-repeat bg-lightgray">
            <img
              src={
                data.volumeInfo.imageLinks?.thumbnail ||
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiapwe.org%2Fwp-content%2Fuploads%2F2017%2F04%2Fclassic-novels.jpg&f=1&nofb=1&ipt=c4140fcc33323603a3da9d6c959571996a93fd0302eea06e1ddec9082ee9ea8c&ipo=images"
              }
              alt={data.volumeInfo?.title || "Book Image"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-start">
              <div className="w-[7.9375rem] text-black font-rubik text-[.9375rem] leading-[1.3125rem] capitalize">
                {data.volumeInfo?.title || "All the Light We Cannot See"}
              </div>
              <div className="w-[5.1875rem] text-black/[.60] font-rubik text-[9.967px] leading-[normal] capitalize py-0.5">
                by {data.volumeInfo?.authors?.[0] || "Anthony Doerr"}
              </div>
              <div className="w-[6rem] text-black/[.70] font-rubik text-[9.967px] leading-[normal] capitalize ">
                <span className="text-black italic">pageCount:</span>{" "}
                {data.volumeInfo?.pageCount || "164"}
              </div>
            </div>
            <div className="w-[9.5625rem] italic text-black/[.80] font-rambla text-[9.967px] leading-[15.573px]">
              {(() => {
                const description =
                  data.volumeInfo?.description ||
                  "This is the default description of the book";
                return description.split(" ").slice(0, 9).join(" ");
              })()}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeaturedBooks;

import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedBooks = () => {
  const api = import.meta.env.VITE_API_KEY;
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
            `https://www.googleapis.com/books/v1/volumes?q=novel&key=${api}&maxResults=${maxSearch}&startIndex=${startIndex}`
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
  }, [api]);

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
              <div className="w-[5.1875rem] text-black/[.60] font-rubik text-[9.967px] leading-[normal] capitalize">
                by {data.volumeInfo?.authors?.[0] || "Anthony Doerr"}
              </div>
            </div>
            <div className="w-[9.5625rem] text-black/[.30] font-rambla text-[9.967px] leading-[15.573px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              morbi eleifend enim, tristique
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeaturedBooks;

{
  /* <div className="frame_8340 inline-flex items-center">
{booksData.map((data, index) => (
        <section key={index}>
  <div className="image_1 lightgray 50% / cover no-repeat] w-[5.6875rem] h-[8.75rem] bg-[url(<path-to-image>)" />
  <img
                src={
                  data.volumeInfo.imageLinks?.thumbnail ||
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiapwe.org%2Fwp-content%2Fuploads%2F2017%2F04%2Fclassic-novels.jpg&f=1&nofb=1&ipt=c4140fcc33323603a3da9d6c959571996a93fd0302eea06e1ddec9082ee9ea8c&ipo=images"
                }
                alt={data.volumeInfo?.title || "Book Image"}
                
              />
  <div className="flex flex-col items-start gap-2">
    <div className="frame_8338 flex flex-col items-start">
      <div className="w-[7.9375rem] h-[2.625rem] text-black font-['Rubik'] text-[.9375rem] leading-[1.3125rem] capitalize">all the light we 
        cannot see</div>
      <div className="w-[5.1875rem] h-[0.6875rem] text-black/[.60] font-['Rubik'] text-[9.967px] leading-[normal] capitalize">by anthony doerr</div>
      <div className="flex items-center gap-4">
        <div className="flex items-start gap-1">
          <svg width={8} height={9} viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.81884 0.962585L4.96474 3.28406L7.52727 3.65861L5.67305 5.46461L6.11065 8.01601L3.81884 6.81077L1.52703 8.01601L1.96463 5.46461L0.110413 3.65861L2.67294 3.28406L3.81884 0.962585Z" fill="#FF971D" />
          </svg>
          <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.59606 0.962585L5.74196 3.28406L8.30449 3.65861L6.45027 5.46461L6.88787 8.01601L4.59606 6.81077L2.30425 8.01601L2.74185 5.46461L0.887634 3.65861L3.45016 3.28406L4.59606 0.962585Z" fill="#FF971D" />
          </svg>
          <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3734 0.962585L5.51931 3.28406L8.08183 3.65861L6.22762 5.46461L6.66521 8.01601L4.3734 6.81077L2.0816 8.01601L2.51919 5.46461L0.664978 3.65861L3.2275 3.28406L4.3734 0.962585Z" fill="#FF971D" />
          </svg>
          <svg width={8} height={9} viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.15069 0.962585L5.29659 3.28406L7.85911 3.65861L6.0049 5.46461L6.44249 8.01601L4.15069 6.81077L1.85888 8.01601L2.29647 5.46461L0.442261 3.65861L3.00478 3.28406L4.15069 0.962585Z" fill="#FF971D" />
          </svg>
          <svg width={8} height={9} viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.92791 0.962585L5.07381 3.28406L7.63634 3.65861L5.78212 5.46461L6.21972 8.01601L3.92791 6.81077L1.6361 8.01601L2.0737 5.46461L0.219482 3.65861L2.78201 3.28406L3.92791 0.962585Z" fill="#DEDEDE" />
          </svg>
        </div>
        <div className="1_988_288_votes w-[4.8125rem] h-2 text-black/[.30] font-['Rubik'] text-[9.967px] font-light leading-[9.967px]">1,988,288 votes</div>
      </div>
    </div>
    <div className="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__purus_morbi_eleifend_enim__tristique w-[9.5625rem] h-11 text-black/[.30] font-['Rambla'] text-[9.967px] leading-[15.573px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </div>
  </div>
  </section>
</div>


 */
}

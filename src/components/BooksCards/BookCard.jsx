import axios from "axios";
import { useEffect, useState } from "react";

const BookCard = () => {
  const api = import.meta.env.VITE_API_KEY;
  const [booksData, setBooks] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        let Books=[];
        let startIndex = 0;
        const maxSearch = 20; //Aik time me kitny items ko search karna hai
            while(startIndex < 60){
                const res = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=novels&key=${api}&maxResults=${maxSearch}&startIndex=${startIndex}`
                  );
                  Books=[...Books,...res.data.items]
                  startIndex += maxSearch
            }
       setBooks(Books)
       setLoading(false);
        
      } catch (error) {
        console.error(error, "Bro api is not working Skill issue LOL 🤣");
        setLoading(false)
      }
    };
    fetchbooks();
  
  }, [setBooks]);
  console.log(booksData)
  if(loading){
    <div> Loading</div>
  }

  return (
    <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5">
        {booksData.map((data ,index)=>(
            <section
            key={index}
        
        
      >
        <div className="w-44 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-x border border-violet-500">
          <a href="#">
            <img
              src={data.volumeInfo.imageLinks?.thumbnail || 'null'}
              alt="{}"
              className="h-38 w-42 object-cover rounded-t-xl lg:ml-7 md:ml-6 sm:ml-6 ml-6 "
            />
            <div className="px-4 py-3 w-42">
              <span className="text-gray-400 mr-3 uppercase text-xs">
              {data.volumeInfo.title}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {data.volumeInfo.authour}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {data.saleInfo.listPrice} <span className="text-orange-500">{data.saleInfo.countryCode} </span>
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
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
            </div>
          </a>
        </div>
      </section>
        ))}
      
    </div>
  );
};

export default BookCard;

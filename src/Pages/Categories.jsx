import BookCard from "@/components/BooksCards/BookCard";
import { useState } from "react";

const Categories = () => {
  const [bookSearch,setBookSearch] = useState("");
  
  const inputHandler = (e) =>{
      const bookSearch = e.target.value;
      setBookSearch(bookSearch)

  }


  return (
    <div>
      
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10">
   <span className="text-xl lg:text-2xl font-rubik italic">Search Your Favorite Books Here</span>
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
                    placeholder="Search"
                    value={bookSearch}
                    onChange={inputHandler}
                    className="w-full py-3 pl-12 pr-4  border-indigo-600 font-playwrite text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-red-500"
                />
            </div>
        </form>
        </div>
    </div>
{console.log(bookSearch)}
      <BookCard />
    </div>
  );
};

export default Categories;

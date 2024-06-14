import books from "@/utils/books";
const Home = () => {
  return (
    <div className="text-white">
       {books.map(book =>(
        <div key={book.id}>
        <img src={book.url} />
          </div>
      ))}
    </div>
  );
};

export default Home;

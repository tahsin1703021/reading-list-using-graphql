import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ops! Something went wrong</p>;

  return (
    <>
      <ul id="book-list">
        <h1>Book name: </h1>
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </>
  );
};

export default BookList;

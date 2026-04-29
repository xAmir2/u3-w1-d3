import { useState } from "react";
import { Form } from "react-bootstrap";
import SingleCard from "./SingleCard";

function CardsList({ books }) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />

      {filteredBooks.map((book) => (
        <SingleCard key={book.asin} book={book} />
      ))}
    </>
  );
}

export default CardsList;

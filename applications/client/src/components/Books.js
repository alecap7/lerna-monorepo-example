import React from "react";
import { useQuery, gql } from "@apollo/client";
import { List } from "design-system";

const ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(ALL_BOOKS);
  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error :(</p>;
  return (
    <List
      items={data.books.map(({ title, author }) => `${title} by ${author}`)}
    />
  );
}

export default Books;

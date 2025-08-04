import React from "react";

const Dynamic = () => {
  const colors = ["Red", "Green", "Blue"];
  const people = [
    { id: 1, name: "Sara", online: true },
    { id: 2, name: "Adeel", online: false },
    { id: 3, name: "Zoya", online: true },
  ];
  const comments = [];
  const books = [
    { id: 1, title: "Atomic Habits" },
    { id: 2, title: "Deep Work" },
  ];

  return (
    <>
      {/* Task-1 */}
      <ul>
        {colors.map((color, index) => (
          <li key={index}>color is : {color}</li>
        ))}
      </ul>

      {/* Task - 2*/}
      <ul>
        {people.map(
          (peoples) =>
            peoples.online && (
              <li key={peoples.id}>
                {peoples.name}
                {peoples.online}
              </li>
            )
        )}
      </ul>

      {/* Task - 3 */}

      {comments.length === 0 ? (
        <p>No comment yet</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}

      {/* Task - 4 */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Dynamic;

import React from 'react'

const ListReRendering = () => {
    const arr = ["React", "Go", "Node.js", "MongoDB"];

    const books = [
        { id: 1, title: "Deep Work", author: "Cal Newport" },
        { id: 2, title: "Clean Code", author: "Robert C. Martin" }
    ];

    const checkBox = [
        { id: 1, task: "Learn JSX" },
        { id: 2, task: "Practice map()" }
    ];

    const Active = [
        { id: 1, name: "Nasir", active: true },
        { id: 2, name: "Ali", active: false },
        { id: 3, name: "Hina", active: true }
]

  return (
    <>
    {/* Task - 1 */}
    <ul>
        {
            arr.map((array, index) => 
                <li key={index}>{array}</li>
        )
        }
    </ul>


      {/* Task - 2 */}
        <ul>
            {
                books.map((book) => 
                <li key={book.id}>{book.title} by {book.author}</li>
            )
            }
        </ul>

      {/* Task - 3 */}
      <ul>
        {
            checkBox.map((check) => <li key={check.id}>
               <input type="checkbox" /> {check.task}</li>)
        }
      </ul>


      {/* Task - 4 */}
        <ul>
            {
                Active.map((User) => 
               User.active && (<li key={User.id}>{User.name}</li>)
            )}
        </ul>
    </>
  )
}

export default ListReRendering
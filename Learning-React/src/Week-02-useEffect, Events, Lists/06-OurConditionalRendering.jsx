import React from 'react'

const OurConditionalRendering = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const friends = [
      { id: 1, name: "Hamza", online: true },
      { id: 2, name: "Zainab", online: false },
      { id: 3, name: "Ahmed", online: true },
    ];
    const tasks = [
      { id: 1, task: "Setup React", done: true },
      { id: 2, task: "Learn JSX", done: false },
      { id: 3, task: "Practice Components", done: false },
      { id: 4, task: "Write Clean Code", done: true },
    ];

  return (
    <>
        
    {/* Task-1 */}
    <ul>
        {
            numbers.filter((num) => num % 2 === 0)
           .map((nums, index)=> <li key={index}>{nums}</li>)
            
        } 
    </ul>
       
    {/* Task-2 */}
        <ul>
          {
            friends.filter((friend) => friend.online)
            .map((frnd) => <li key={frnd.id}>{frnd.name} {frnd.online}</li>)
          }
        </ul>

    {/* Task-3 */}
          <ul>
            {
              tasks.filter((task) => !task.done )
              .map((task) => <li key={task.id}>{task.task}</li>)
            }
          </ul>
    </>
  )
}

export default OurConditionalRendering
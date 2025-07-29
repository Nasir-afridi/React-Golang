import Welcome from "./Welcome"
import Greeting from "./Greeting"
import Button from "./02-Button"
import Card from "./03-Card"
function App() {

  return (
    <>
      <Welcome />
      <Greeting />
      <Button label="Hello this is me" onClick={() => alert("hello")}/>
      <Card title = "Bottle" description = "this is a bottle of silver"/>
    </>
  )
}

export default App

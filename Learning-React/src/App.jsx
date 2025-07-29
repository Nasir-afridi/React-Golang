import Welcome from "./Welcome"
import Greeting from "./Greeting"
import Button from "./02-Button"
import Card from "./02-Card"
import Counter from "./03-Counter"


function App() {

  return (
    <>
      {/*  
      week-1 (day1-2)
      <Welcome />
      <Greeting />
      <Button label="Hello this is me" onClick={() => alert("hello this is bootle")}/>
      <Button label="Hello this is shoes" onClick={() => alert("hello this is shoes")}/>
      <Button label="Hello this is pc" onClick={() => alert("hello this is pc")}/>
      <Card title = "Bottle" description = "this is a bottle of silver" buttonLabel = "click here" onOurClick={() => alert("Buying Bottle")} />
      <Card title = "shoes" description = "this is a shoes of nike" buttonLabel = "click here" onOurClick={() => alert("Buying shoes")} />
      <Card title = "pc" description = "this is a pc of windows" buttonLabel = "click here"  onOurClick={() => alert("Buying pc")} /> 
      */}
      <Counter />
    </>
  )
}

export default App

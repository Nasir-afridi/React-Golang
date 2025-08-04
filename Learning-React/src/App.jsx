import Welcome from "./Week-01-React-Basics/01-Welcome"
import Greeting from "./Week-01-React-Basics/01-Greeting"
import Button from "./Week-01-React-Basics/02-Button"
import Card from "./Week-01-React-Basics/02-Card"
import Counter from "./Week-01-React-Basics/03-Counter"
import Hide from "./Week-01-React-Basics/03-hideShow"
import LiveInput from "./Week-01-React-Basics/03-liveInput"
import ConditionalRendering from "./Week-01-React-Basics/04-ConditionalRendering"
import RenderingList from "./Week-01-React-Basics/04-RenderingList"
import ControlInputSubmit from "./Week-01-React-Basics/04-ControlInputSubmit"
import MultipleControlInput from "./Week-01-React-Basics/04-MultipleControlInput"
import ControlInputValidation from "./Week-01-React-Basics/05-ControlInputValidation"
import PasswordValidation from "./Week-01-React-Basics/05-PasswordValidation"
import UsernameValidation from "./Week-01-React-Basics/05-UsernameValidation"
import FinalForm from "./Week-01-React-Basics/05-FinalForm"
import ValidationUsingErrors from "./Week-01-React-Basics/06-ValidationUsingErrors"
import LiveValidation from "./Week-01-React-Basics/06-LiveValidation"
import SummaryWeekOne from "./Week-01-React-Basics/07-SummaryWeekOne"


import CounterUsingUseEffect from "./Week-02-useEffect, Events, Lists/01-CounterUsingUseEffect"
import TitleChangeUsingUseEffect from "./Week-02-useEffect, Events, Lists/01-TitleChangeUsingUseEffect"
import UseEffectMastery from "./Week-02-useEffect, Events, Lists/02-UseEffectMastery"
import MouseTracking from "./Week-02-useEffect, Events, Lists/02-MouseTracking"
import InputLogging from "./Week-02-useEffect, Events, Lists/02-InputLogging"
import MousePositionTrack from "./Week-02-useEffect, Events, Lists/02-MousePositionTrack"
import OnClickEvent from "./Week-02-useEffect, Events, Lists/03-OnClickEvent"
import ListReRendering from "./Week-02-useEffect, Events, Lists/04-ListReRendering"
import Dynamic from "./Week-02-useEffect, Events, Lists/05-Dynamic rendering"
import OurConditionalRendering from "./Week-02-useEffect, Events, Lists/06-OurConditionalRendering"

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
     

      day-3
      <Counter />
      <Hide />
      <LiveInput />
      

      day-4
      <ConditionalRendering />
      <RenderingList />
      <ControlInputSubmit />
      <MultipleControlInput />
      

      day-5
      <ControlInputValidation />
      <PasswordValidation />
      <UsernameValidation />
      <FinalForm />


      day-6
      <ValidationUsingErrors />
      <LiveValidation />


      day-7
      <SummaryWeekOne />
      

      Week-2 (day-1)
      <CounterUsingUseEffect />
      <TitleChangeUsingUseEffect />
      

      day-2
      <UseEffectMastery />
      <MouseTracking />
      <InputLogging /> 
      <MousePositionTrack /> 
      

      day-3
      <OnClickEvent />
      
      
      day-4
      <ListReRendering />


      day-5
       <Dynamic />
      */}
     
      <OurConditionalRendering/>
    </>
  )
}

export default App

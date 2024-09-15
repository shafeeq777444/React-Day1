import Details from './student'

function App() {

  return (<div>
     <Details name={"spangoe"} age={30} isStudent={false}/>
     <Details name="boe" age={20} isStudent={true}/>
     <Details></Details>
     <Details name="shafeeeq"></Details>
  </div>
   
  )
  
}

export default App

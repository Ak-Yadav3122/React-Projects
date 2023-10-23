import Ak from "./ak"
function App() {

  // we also write the java script code
  const username = " Mr. Aichchik"  // for displaying the javascript code we use curlybrackets{} and inside curly bracket we only write the evaluated expression 

  return (

    <>   {/*NOTE=> we write <></> because there is rule in .jsx i.e;
          We only have a permission to export the only single element and
          If we write more elements then we use (<></>) that is called fragment.
          */}

      <Ak />

      {/* The value inside the curly brackets alwauys treated as varible and we only write the evaluted expression value inside the curlybrackets {}
          Evaluted expression means the final outcomes of javascript code */}
      <h1>Hello {username} </h1>
    </>

  )
}

export default App

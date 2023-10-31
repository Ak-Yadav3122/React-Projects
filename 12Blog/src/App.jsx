
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWITE_URL);
    return (
    <>
     <h1 className='text-3xl font-bold'>A Mega Blog Webpages..</h1>
    </>
  )
}

export default App


/*

Important Note

When we use vite for make the project we have to use VITE_ to set the varible
ex:-VITE_APPWITE_URL = ""
And it will exprosed as import.meta.env.VITE_APPWITE_URL
*/
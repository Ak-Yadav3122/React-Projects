import { useState, useCallback, useEffect, useRef } from 'react'

//NOTE=>
// useRef is a a hook of react that are used to take any elements reference from the webpage and perform the manipulation.
// useEffect is a hook of react that are call when the page is loaded first time and if there is any changes in there dependencies then they again Rerun.
// useCallback is a hook of react that used for memorise the function, or there parts of memory that are used and threds as much as possible


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"   // OR   str = str + "0123456789" 
    }
    if (charAllowed) {
      str += "!@#$%^&*-=~"   // OR   str = str + "!@#$%^&*-=~" 
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      // pass =  str.charAt(char)   // this show only one value beacuse there are overwrite the value not added or append the value hence we use += for append the value,see on bellow
      pass = pass + str.charAt(char)  // we can also write it in this form i.e;   pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // this line is used for select the password 
    passwordRef.current?.setSelectionRange(0, 999); //this line is used for make the range of the password thet are selected. This ? symbol is use for optionally selection because the the value can be null or not.
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}  // Here we pass the reference  
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-sky-500 hover:bg-sky-700  text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={4}
        max={20}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} // e is paramenter and we can take any parameter.
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
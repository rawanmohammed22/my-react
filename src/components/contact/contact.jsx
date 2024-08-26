import React, { useState } from 'react'
import style from './contact.module.css'


export default function Contact() {

  

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (id) => () => {
    setFocusedInput(id);
  };

  const handleBlur = (id) => (event) => {
    if (event.target.value === '') {
      setFocusedInput(null);
    }

  };










  return ( <>
  
      
  
   <div className="  container mx-auto  bg-white mt-16 mb-14   w-3/5  ">
  <h1 className="text-zinc-600  text-5xl    uppercase    text-center mt-8 py-6 pb-16 mb-11   font-extrabold"> conatct section </h1>
   <div className="flex-col    pl-10  space-y-10 mx-auto pb-10  ">
    <div className="nnn relative">
    <label
            htmlFor="1"
            className={`absolute -top-20 left-0 bottom-4 text-xl ${focusedInput === '1' ? 'text-green-800' : 'hidden'}`}
          >
            userName:
          </label>
          <input
            type="text"
            id="1"
            placeholder="userName"
            onInput={handleFocus('1')}
            onBlur={handleBlur('1')}
            className="text-gray-500 w-3/5 p-3 bg-transparent pt-0 mt-0 text-xl border-slate-300 border-none"
          /></div>
  <div className="nnn   relative"> <label
            htmlFor="2"
            className={`absolute -top-10 left-0 bottom-4 text-xl ${focusedInput === '2' ? 'text-green-800' : 'hidden'}`}
          >
            userAge:
          </label>
          <input
            type="text"
            id="2"
            placeholder="userAge"
            onInput={ handleFocus('2')}
            onBlur={ handleBlur( '2')}
            className="text-gray-500 w-3/5 p-3 bg-transparent text-xl"
          /></div>
   <div className="nnn   relative"><label
          htmlFor="3"
          className={`        ${
            focusedInput === '3' ? `text-green-800     absolute bottom-20   b  border-none        ` : 'hidden'
          }`}
        >
          userEmail:
        </label>
        <input
          type="text"
          id="3"
          placeholder="userEmail"
          onInput={handleFocus('3')}
          onBlur={handleBlur('3')}
          className="text-gray-500 w-3/5 p-3 bg-transparent text-xl    border-none
                        "
        /></div>
  <div className="nnn      relative" >   <label
          htmlFor="4"
          className={`absolute   bottom-20 text-xl ${
            focusedInput === '4' ? 'text-green-800' : 'hidden'
          }`}
        >
          userPassword:
        </label>
        <input
          type="text"
          id="4"
          placeholder="userPassword"
          onInput={handleFocus('4')}
          onBlur={handleBlur('4')}
          className="text-gray-500 w-3/5 p-3 bg-transparent text-xl"
        /></div></div>
  
  
  
  
  </div>
  </>
 

  )
}

import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log('hello world')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  console.log(size)
  return (<>
  
  <h1>window</h1>
  <h2>{size} pX</h2>
  
  </>
  );
};

export default UseEffectCleanup;

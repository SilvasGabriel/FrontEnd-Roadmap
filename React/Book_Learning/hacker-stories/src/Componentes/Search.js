import React,{useRef, useEffect} from "react";

/*
Se estiver dois do mesmo componente com o autoFocus somente o último receberá a propriedade, para isso precisamos passar no componente no App.js o isFocused e no componente como propriedade isso já fará a funcionalidade funcionar para os caso ouver mais de um componente com autofocus.Porém a aplicação ainda está faltando a implementação delcarativa para isso usaremos o useRef. Assim podemos mudar o react de declarativo para imperativo.
*/


const InputWithLabel = ({id, children, value, onInputChange, type = 'text', isFocused}) => {

  const inputRef = useRef()

  useEffect(() => {
    
    if(isFocused && inputRef.current){

      inputRef.current.focus()

    }

  }, [isFocused])
  
  return (
    <>
      <label htmlFor={id}>{children}: </label>
      <input 
      id={id}
      value={value} 
      type={type}
      ref={inputRef}
      onChange={onInputChange} />
      
      <p>Searching for <strong>{value}</strong> </p>

    </>
  )
};

export default InputWithLabel;

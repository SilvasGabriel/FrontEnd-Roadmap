import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

function App() {
  
  const [name,setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing,setEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert,setAlert] = useState({
    show:true,
    msg:'',
    type:''
  })

  const handleSubmit = (e) => {
      e.preventDefault()
      //console.log('hello')
      if(!name){
        //display alert
        //setAlert({show:true,msg:'please enter value',type:'danger'})
        showAlert(true,'danger','please enter value')
      }else if(name && isEditing){
        //deal with edit
        setList(list.map((item)=>{
          if(item.id === editID){
            return {...item,title:name}
          }

          return item

        }))

        setName('')
        setEditID(null)
        setEditing(false)
        showAlert(true,'success','value changed')

      }else{
        //show alert
        showAlert(true,'success','item addet to the list')
        const newItem = {
        id: new Date().getTime().toString(), 
        title:name
      }
        setList([...list,newItem])
        setName('')
      }
  }

  const showAlert = (show=false,type='',msg='') => {
    setAlert({show,msg,type})
    
  }

  const clearList = () => {
    showAlert(true,'danger','empty list')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true ,'danger','item removed')
    setList(list.filter((item)=> item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item)=> item.id === id)
    setEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return (
    <section className='section-center'>
      
      <form className='grocery-form' onSubmit={handleSubmit}>

          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
          <h3>grocery bud</h3>

          <div className='form-control'>
            
            <input 
            type='text' 
            className='grocery' 
            placeholder="e.g. eggs" 
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            />
            
            <button type='submit' className='submit-btn'>
                {isEditing? 'edit' : 'submit'}
            </button>
          
          </div>

      </form>

      <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>clear items</button>  
      </div> 
    
    </section>
  )
}

export default App

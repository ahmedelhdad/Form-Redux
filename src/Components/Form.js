import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {sentNames} from './CounterSlice'
const Form = ({setShow}) => {
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [addrees,setAddrees] = useState()
    const [type,setType] = useState()

    const dispatch = useDispatch()
    const names =
    [
        {
            id : Math.floor(Math.random() * 100),
            name:name,
            age:age,
            addrees:addrees,
            type:type
        }
    ]
    const myName = (e) => 
    {
        setName(e.target.value)
    }
    const myAge = (e) => 
    {
        setAge(e.target.value)
    }
    const myAddrees = (e) => 
    {
        setAddrees(e.target.value)
    }
    const myType = (e) => 
    {
        setType(e.target.value)
    }
    const submit = (e) => 
    {
        if(name && age)
        {
            dispatch(sentNames(names))
            setShow(false)
        }else
        {
            e.preventDefault()
        }
        
    }
  return (
    <div className='add'>
        <form onClick={submit}>
            <input type='text' placeholder='Name' onChange={myName}/>
            <input type='number' placeholder='age' onChange={myAge} />
            <input type='text' placeholder='addrees' onChange={myAddrees} />
            <input type='text' placeholder='type' onChange={myType} />
            <button type='submit'>Sent</button>
            <button type='Close' onClick={() => setShow(false)}>Close</button>
        </form>
    </div>
  )
}

export default Form

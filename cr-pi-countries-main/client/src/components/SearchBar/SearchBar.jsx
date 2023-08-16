import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import { search } from '../../redux/action/action'
import { Link } from 'react-router-dom'
import style from './Search.module.css'


function SearchBar() {
    const dispatch = useDispatch()
    const [name,setName] = useState('')

    const handleChange = (event) =>{
        setName(event.target.value)
    }

    const onHandleSearch = () =>{
        dispatch(search(name))
        setName('')
    }

    return (
        <div className={style.contenedor}>
            <div className={style.ContainerInput}>
                <input type='search' placeholder="Search.." value={name} onChange={handleChange} className={style.input}/>
                <Link to='/result'>
                    <button onClick={onHandleSearch} className={style.button}>BUSCAR</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchBar;
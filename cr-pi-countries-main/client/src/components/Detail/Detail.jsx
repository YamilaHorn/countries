import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import style from './Detail.module.css'

function Detail() {
    const {id} = useParams()
    const[idDetail,setIdDetail] = useState([])
    
    useEffect(()=>{
        const fetchCountryData=async()=>{
            try{
                const response = await fetch(`http://localhost:3001/countries/${id}`)
                const data = await response.json()
                setIdDetail(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchCountryData()
        return ()=>{
            setIdDetail({})
        }
    },[])

    console.log(idDetail)

    return <div className={style.Container}>
        <div className={style.ContainerArrow}>
                <Link to='/home'>
                ✘
                </Link>
            </div>
        <div className={style.containerInfo}>
            <div className={style.containerImage}>
                <img src={idDetail.image} alt={idDetail.name} className={style.image}/>
            </div>
            <div className={style.nameCountry}>
                <h2>{idDetail.name}</h2>
                <h2>({idDetail.id})</h2>
            </div>  
            <div className={style.info}>
                <h2>Continente: {idDetail.continent}</h2>
                <h2>Capital: {idDetail.capital}</h2>
                {idDetail.subregion==='undefined' ? null: <h2>Subregión: {idDetail.subregion}</h2>}
                {idDetail.area==='undefined' ?  null:<h2>Área: {idDetail.area} m² </h2>}
                <h2>Población: {idDetail.population} Personas</h2>
                </div>
                <div className={style.button}>
            <Link to='/create'>
                <button className={style.buttonAct}>Nueva Actividad</button> 
            </Link>  
                </div>
        </div>
        <div className={style.infoActivity}>
                {idDetail.Activities && idDetail.Activities.length === 0 ? (
                    <h2 className={style.title}>SIN ACTIVIDADES</h2>
                    ) : (
                    <h2 className={style.title}>ACTIVIDADES</h2>
                )}
                <div className={style.ContainerActs}>
                        {idDetail.Activities && idDetail.Activities.length > 0 && idDetail.Activities.map((activity, index) => (
                            <div className={style.activityCard}>
                                    <p key={index} className={style.p}>
                                    <p className={style.name}>{activity.name}</p>
                                    <p className={style.p}>Dificultad: {activity.difficulty}☆</p>
                                    <p className={style.p}>Duración: {activity.duration} hs</p>
                                    <p className={style.p}>Temporada: {activity.season}</p>
                                </p>
                            </div>
                        ))}
                </div>
        </div>

        </div>;
}

export default Detail;
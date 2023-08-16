import React, { useEffect, useState } from "react";
import { allCountries, filter, getActivity, orderCountry } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../Cards/Cards";
import Paginacion from "../Paginacion/Paginacion";
import style from "./Home.module.css";

function HomePage() {

  const dispatch = useDispatch();
  const countryFilter = useSelector((state) => {
    if (state.filterByContinent === "All") {
      return state.Countries;
    } else {
      return state.filterByContinent;
    }
  });
  const activities = useSelector(state=>state.Activity)
  const [filtered, setFiltered] = useState("All");
  const [activityFilter,setActivityFilter] = useState('All')
  const [orderBy, setOrderBy] = useState("AscName");
 

  useEffect(() => {
    dispatch(allCountries());
  
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getActivity())
  },[dispatch])

  const onHandleFilter = (event) => {
    event.preventDefault();
    let selectCountry = event.target.value;
    setFiltered(selectCountry);
    setPages(1);
  };

  const onHandleActivity = (event) => {
    event.preventDefault();
    setActivityFilter(event.target.value);
    setPages(1);
  };

  const orderFilter = (event) => {
    event.preventDefault();
    const selectOrder = event.target.value;
    setOrderBy(selectOrder);
  };

  const handleFilter = () => {
    dispatch(filter(filtered,activityFilter));
    dispatch(orderCountry(orderBy));
  };

  // -----------------PAGINADO----------------------

  const [pages, setPages] = useState(1);
  const [forPage, setForPage] = useState(10);

  const max = Math.ceil(countryFilter.length / forPage);

  return (
    <div className={style.containerHome}>
      <div>
        
      </div>
      <div className={style.containerFilter}>
        <div className={style.allFilter}>
            <div className={style.Filters}>
            <h5>Filter </h5>
            <select onChange={onHandleFilter}>
                <option value="All">Todos los paises</option>
                <option value="Antarctica">Antartida</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
            </select>

            <select onChange={onHandleActivity}>
                <option value="All">Actividades</option>
                {activities.length > 0 && activities.map(act=>(
                  <option key={act.id} value={act.name}>{act.name}</option>
                ))}
            </select>


            </div>
            <div className={style.orders}>
            <h5> Order </h5>
            <select onChange={orderFilter}>
                <option value="AscName">A-Z</option>
                <option value="DescName">Z-A</option>
                <option value="DescPopulation">Min Poblacion</option>
                <option value="AscPopulation">Max Poblacion</option>
            </select>
            </div>
            <button onClick={handleFilter} className={style.button}>
            APLICAR
            </button>
        </div>
        <div className={style.countriesContainer}>
            <div className={style.countries}>
            {countryFilter.length > 0 ? countryFilter
                .slice((pages - 1) * forPage, (pages - 1) * forPage + forPage)
                .map((count) => (
                <Cards
                    key={count.id}
                    id={count.id}
                    name={count.name}
                    continent={count.continent}
                    image={count.image}
                />
                )):<p className={style.ActivityAlert}>NO HAY ACTIVIDADES EN ESTE CONTINENTE</p>}
            </div>
      </div>
      </div>
      <Paginacion
        max={max}
        pages={pages}
        setPages={setPages}
        country={countryFilter}
      />
    </div>
  );
}

export default HomePage;
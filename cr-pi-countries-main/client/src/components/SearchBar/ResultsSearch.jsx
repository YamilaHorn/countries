
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import React from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";


function ResultsSearch() {
  const countriesResult = useSelector((state) => state.resultSearch);
  if (!Array.isArray(countriesResult)) {
    // Si no es un array, mostramos un mensaje de error o retorno de componente vacío
    return <h2 className={styles.text}>¡DEBES INGRESAR UN PAIS!</h2>;
  }
  return (
    <div className={styles.Container}>
      <h2 className={styles.text}>RESULTADOS DE LA BÚSQUEDA:</h2>
      <div className={styles.containerCountry}>
        {countriesResult.length === 0 ? (
          <h2 className={styles.text}>No se encontraron países.</h2>
        ) : (
          countriesResult.map((count) => (
            <Cards
              className={styles.cards}
              key={count.id}
              id={count.id}
              name={count.name}
              continent={count.continent}
              image={count.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ResultsSearch;
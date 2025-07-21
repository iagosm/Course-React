import { useState } from 'react'
import styles from './CarDetails.module.css'

const CarDetails = () => {

  const [cars] = useState([
  {
    id: 1,
    modelo: "Fusca",
    marca: "Volkswagen",
    ano: 1976,
    cor: "Azul"
  },
  {
    id: 2,
    modelo: "Civic",
    marca: "Honda",
    ano: 2020,
    cor: "Preto"
  },
  {
    id: 3,
    modelo: "Gol",
    marca: "Volkswagen",
    ano: 2018,
    cor: "Branco"
  },
  {
    id: 4,
    modelo: "Camaro",
    marca: "Chevrolet",
    ano: 2021,
    cor: "Amarelo"
  },
  {
    id: 5,
    modelo: "X6",
    marca: "BMW",
    ano: 2022,
    cor: "Cinza"
  }
]);


  return (
    <div>
      {cars.map((car) => (
        <div className={styles.container}>
          <div className={styles.container_car}>
            <div className='containerDetails'>Modelo: {car.modelo}</div>
            <div className='containerDetails'>Marca: {car.marca}</div>
            <div className='containerDetails'>Cor: {car.cor}</div>
            <div className='containerDetails'>Ano: {car.ano}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CarDetails
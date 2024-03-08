import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState("");

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://65d8fa36c96fbb24c1bc98c9.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        Navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return <div class="container">
         <Header/> 
         <Menu/>
         <Footer/>
         
    </div>;
}

function Header() {
  const style = {};
    return (
  <header className="header">
    <h1 style={style}>React pizza co.</h1>;
  </header>)
}

function Menu() {
  
  const pizzas = pizzaData;
  const numPizzas =pizzas.length;
    return (
    <main className="menu"> 
        <h2>Our menu</h2>


        {numPizzas > 0 ? (
          <>
          <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. all from our 
          stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
          </>
        ) : <p>please come back later :)</p>
        
        }

            

            {/* <Pizza name="pizza spinaci" 
            ingredients="Tomato, mozarella, spinach, and ricotta cheese" 
            photoName="pizzas/spinaci.jpg" 
            price={100}/>
            <Pizza name="pizza funghi" 
            ingredients="Tomato, mozarella, spinach" 
            photoName="pizzas/funghi.jpg" 
            price={200}/>             */}
    </main>
    );
}

function Pizza ({pizzaObj}){


  return(

    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p></div>
      <span>{pizzaObj.soldOut ? "Sold Out" :pizzaObj.price}</span>
      </li>
  ) 
}


function Footer() {
    const hour = new Date().getHours();
    const openHour =9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;


    return (
    <footer className="footer">
      {isOpen ? 
      (<order closeHour={closeHour} openHour={openHour}/>)
      : <p>we,re happy to welcome you </p>}
      </footer>)
}

function order({closeHour, openHour}){
  return(
    <div className="order">
      <p>we're open from {openHour}:00 to {closeHour}:00 . come visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
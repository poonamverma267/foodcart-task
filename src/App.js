import "./App.css";
import Header from "./components/layout/Header";
import React, { useState } from "react";
import { useEffect } from "react";
import PopularDish from "./components/PopularDish";
import ChefWeek from "./components/ChefWeek";
import CuisineList from "./components/CuisineList";
import Footer from "./components/layout/Footer";

function App() {
  const [pageitems, setPageitems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("http://63.142.251.101:3000/mymenu-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      type: "jsonp",
    })
      .then((response) => response.json())
      .then((response) => {
        const transformedCusines = response.data;
        setPageitems(transformedCusines);
        setLoaded(true);
        //console.log(response.data);
      });
    // const transformedCusines = pageData.data;
    // setPageitems(transformedCusines);
    // setLoaded(true);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="secone">
        {loaded && <CuisineList Cuisines={pageitems.cuisine_list} />}
      </section>

      {loaded && <PopularDish PopFood={pageitems.popularweek} />}
      {loaded && <ChefWeek Chef={pageitems.chefweek} />}
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/layout/Header";
import React, { useState } from 'react';
import FoodList from './components/UI/FoodList';
import Card from './components/UI/Card';

const dataJson = {
  "success": true,
  "code": 200,
  "data": {
      "cuisine_list": [
          {
              "id": 1,
              "name": "Thai",
              "imageUrl": "assets/cuisine/1644578966812__Thai.svg"
          },
          {
              "id": 2,
              "name": "Indian ",
              "imageUrl": "assets/cuisine/1640956358127__Indian.svg"
          },
          {
              "id": 3,
              "name": "Italian",
              "imageUrl": "assets/cuisine/1630479281786__Italian.svg"
          },
          {
              "id": 4,
              "name": "Chinese",
              "imageUrl": "assets/cuisine/1640956566232__Chinese.svg"
          },
          {
              "id": 5,
              "name": "Korean",
              "imageUrl": "assets/cuisine/1640956588170__Korean.svg"
          },
          {
              "id": 6,
              "name": "African",
              "imageUrl": "assets/cuisine/1630479971083__African.svg"
          },
          {
              "id": 7,
              "name": "American",
              "imageUrl": "assets/cuisine/1630479991654__American.svg"
          },
          {
              "id": 8,
              "name": "Baked Goods",
              "imageUrl": "assets/cuisine/1630480012769__Baked Goods.svg"
          },
          {
              "id": 9,
              "name": "Caribbean",
              "imageUrl": "assets/cuisine/1630480025589__Caribbean.svg"
          },
          {
              "id": 10,
              "name": "Dessert",
              "imageUrl": "assets/cuisine/1630480042387__Dessert.svg"
          },
          {
              "id": 11,
              "name": "Japanese",
              "imageUrl": "assets/cuisine/1630480081396__Japanese.svg"
          },
          {
              "id": 12,
              "name": "Latin American",
              "imageUrl": "assets/cuisine/1630480097551__Latin American.svg"
          },
          {
              "id": 13,
              "name": "Meditarranean",
              "imageUrl": "assets/cuisine/1630480108362__Meditarranean.svg"
          },
          {
              "id": 14,
              "name": "Mexican",
              "imageUrl": "assets/cuisine/1630480131382__Mexican.svg"
          },
          {
              "id": 15,
              "name": "Middle eastern",
              "imageUrl": "assets/cuisine/1630480144008__Middle eastern.svg"
          },
          {
              "id": 16,
              "name": "Nepalese",
              "imageUrl": "assets/cuisine/1630480157936__Nepalese.svg"
          },
          {
              "id": 17,
              "name": "Pakistani",
              "imageUrl": "assets/cuisine/1630480168115__Pakistani.svg"
          },
          {
              "id": 18,
              "name": "Southeast Asian",
              "imageUrl": "assets/cuisine/1630480179790__Southeast Asian.svg"
          },
          {
              "id": 19,
              "name": "Southern",
              "imageUrl": "assets/cuisine/1630480191763__Southern.svg"
          }
      ],
      "popularweek": [
          {
              "chefid": 256,
              "chefname": "abinash sahoo",
              "chefprofile": "assets/profile/1644673902197__man.jpg",
              "reviewCnt": 3,
              "totalRating": "3.00",
              "dish_masters": [
                  {
                      "dishid": 110,
                      "dishname": "Southern chicken fry",
                      "dishImage": "assets/dish/1644679952404__Southern-1.jpg"
                  },
                  {
                      "dishid": 108,
                      "dishname": "Salad",
                      "dishImage": "assets/dish/1644679584495__American-2.jpg"
                  }
              ]
          },
          {
              "chefid": 244,
              "chefname": "Samir maurya",
              "chefprofile": "assets/profile/1644676391198__images.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 106,
                      "dishname": "Burfi ",
                      "dishImage": "assets/dish/1644666250238__87248103.webp"
                  },
                  {
                      "dishid": 107,
                      "dishname": "Gin Khao Yung",
                      "dishImage": "assets/dish/1644674648824__Thai-1.jpg"
                  }
              ]
          },
          {
              "chefid": 235,
              "chefname": "Avani",
              "chefprofile": "assets/profile/1644580745735__0C2792CF-A968-4785-89CE-3B5F2C4AE0B8.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 124,
                      "dishname": "Bueger",
                      "dishImage": "assets/dish/1644896232094__burger.jpeg"
                  },
                  {
                      "dishid": 94,
                      "dishname": "Dosa",
                      "dishImage": "assets/dish/1644494535516__dosa-recipe-3.jpeg"
                  },
                  {
                      "dishid": 101,
                      "dishname": "dosa",
                      "dishImage": "assets/dish/1644578881916__Medu-Vada-Recipe-Step-By-Step-Instructions.jpeg"
                  },
                  {
                      "dishid": 102,
                      "dishname": "Idly",
                      "dishImage": "assets/dish/1644578845084__Idly19-360x361.jpeg"
                  }
              ]
          },
          {
              "chefid": 214,
              "chefname": "Monica",
              "chefprofile": "assets/profile/1644678821298__women 2.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 85,
                      "dishname": "Red Velvet Cake",
                      "dishImage": "assets/dish/1644678262370__Baked-goods-1.jpg"
                  },
                  {
                      "dishid": 88,
                      "dishname": "Noodles ",
                      "dishImage": "assets/dish/1644678540540__Chinese-1.jpg"
                  }
              ]
          },
          {
              "chefid": 152,
              "chefname": "Mohit",
              "chefprofile": "assets/profile/1644679492480__man 6.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 43,
                      "dishname": "Molten chocolate cake",
                      "dishImage": "assets/dish/1644678925100__Dessert-1.jpg"
                  },
                  {
                      "dishid": 109,
                      "dishname": "Egg and Spinach ",
                      "dishImage": "assets/dish/1644679377123__Japanese-1.jpg"
                  }
              ]
          },
          {
              "chefid": 151,
              "chefname": "Simran",
              "chefprofile": "assets/profile/1644681128767__women 4.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 62,
                      "dishname": "Idli",
                      "dishImage": "assets/dish/1644680930273__Indian-2.jpg"
                  },
                  {
                      "dishid": 53,
                      "dishname": "Momo",
                      "dishImage": "assets/dish/1644680276344__Nepal-1.jpg"
                  },
                  {
                      "dishid": 127,
                      "dishname": "Masala Noodle",
                      "dishImage": "assets/dish/1645095866749__panipuri.jpg"
                  }
              ]
          },
          {
              "chefid": 148,
              "chefname": "tom",
              "chefprofile": "assets/profile/1644678067902__man 5.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 111,
                      "dishname": " Falafel",
                      "dishImage": "assets/dish/1644681882462__Mediterranean-1.jpeg"
                  },
                  {
                      "dishid": 112,
                      "dishname": "Jollof rice",
                      "dishImage": "assets/dish/1644682028901__African-1.jpg"
                  }
              ]
          },
          {
              "chefid": 141,
              "chefname": "Suraj",
              "chefprofile": "assets/profile/1644677798462__man 7.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 113,
                      "dishname": "Spicy Seafood Salad",
                      "dishImage": "assets/dish/1644682280967__Thai-2.jpg"
                  },
                  {
                      "dishid": 114,
                      "dishname": "Spicy Korean Radish-Musaengchae",
                      "dishImage": "assets/dish/1644682527790__Korean-1.jpg"
                  }
              ]
          },
          {
              "chefid": 42,
              "chefname": "Anuradha",
              "chefprofile": "assets/profile/1644677319063__women 1.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 115,
                      "dishname": "Quinoa & Okra",
                      "dishImage": "assets/dish/1644682943816__Caribbean-1.png"
                  },
                  {
                      "dishid": 116,
                      "dishname": "Rice & Peas Vegan Chick'n",
                      "dishImage": "assets/dish/1644683075366__Caribbean-2.png"
                  }
              ]
          },
          {
              "chefid": 41,
              "chefname": "Alex",
              "chefprofile": "assets/profile/1644676841130__suraj.jpg",
              "reviewCnt": 0,
              "totalRating": 0,
              "dish_masters": [
                  {
                      "dishid": 33,
                      "dishname": "Tacos De Yaca",
                      "dishImage": "assets/dish/1644683150126__Mexican-2.jpg"
                  }
              ]
          }
      ],
      "chefweek": [
          {
              "chefid": 151,
              "chefname": "Simran",
              "chefprofile": "assets/profile/1644681128767__women 4.jpg",
              "aboutChef": "I'm Indi, a private plant‑based chef and baker of over seven years currently stationed in NYC area. The purpose of my mission is to provide innovation and inspiration via the nourishing powers of plant foods. I've been living by helping to heal and transform lives through the awareness of the medicinal, physical, mental and spiritual properties of Earth's foods without compromising the same satisfying flavors we enjoy. I offer custom, goal‑based meal planning and preparation, nutritional and culinary advice, artisanal baking services, video based cooking tutorials, and menu and recipe writing. I also cater events! If ever you're looking for a plant‑based chef for your next event, do contact me at indieelement@protonmail.com. I'd love to work with you!",
              "chef_cusinie": [
                  {
                      "id": 1,
                      "name": "Thai"
                  },
                  {
                      "id": 6,
                      "name": "African"
                  }
              ],
              "totalRating": 0,
              "reviewCnt": 0
          }
      ]
  }
};

function App() {
  const [cusines, setCusines] = useState([]);
  const [loaded, setLoaded] = useState(false);
  function fetchCusinesHandler() {
    console.log(dataJson.data);

     const transformedCusines = dataJson.data;
        setCusines(transformedCusines);
        setLoaded(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
  };
    fetch('http://63.142.251.101:3000/mymenu-data', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // const transformedCusines = data.results.map((cusineData) => {
        //   return {
        //     cusinieList: cusineData.cusinie_lists,
        //     popularWeek: cusineData.popularweek,
        //     chefWeek: cusineData.chefweek,
        //   };
        // });
        // setCusines(transformedCusines);
        
      });
  }
  return (
    <div className="App">
      <Header> </Header>
      <section>
        <button onClick={fetchCusinesHandler}>Fetch Cusines</button>
      </section>
      {loaded &&
      <section>
        <FoodList Cusines={cusines} />
      </section>
}
      
    </div>
  );
}

export default App;

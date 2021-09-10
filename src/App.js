import React, { useEffect } from 'react'
import { useState } from 'react';
import Menu from './Components/Menu';
import Button from './Components/Button';
import { movies$ } from './movies';

function App() {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    movies$.then((fetchedUser) => {
      setMenuItems(fetchedUser);
    })
  }, [])
  
  const [menuItem, setMenuItem] = useState(menuItems);

  const allCategories = ['All', ...new Set(menuItems.map(item => item.category))];

  console.log(allCategories);

  const filter = (button) => {

    if (button === 'All') {
      setMenuItem(menuItems);
      return;
    }

    const filteredData = menuItems.filter(item => item.category === button);
    setMenuItem(filteredData)
  }
  return (
    <div className="App">

      <div className="title">
        <h1>
         React 
           <span>Filtre Movies</span>
        </h1>
       
      </div>


      <Button button={allCategories} filter={filter} />
      <Menu menuItem={menuItem} allCategories={allCategories} />

    </div>
  );
}

export default App;

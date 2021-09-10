import React, { useEffect } from 'react'
import { useState } from 'react';
import { UpdownButton } from "@lyket/react";
function Menu({ menuItem,allCategories }) {
    const [score, setcore] = useState(0);
    const [additem, setitem] = useState([]);
    console.log(allCategories);
    console.log(additem);

    useEffect(() => {

        setitem(menuItem);
      
    }, [menuItem]);

    const handleClick = (id) => {

        console.log(id);
        const posts = additem.filter((key) => key.id !== id);
        setitem(posts)
       
    }

    return (
        <div className="item">
            {
                additem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container"  >

                            <h2>{item.title}</h2>

                            <UpdownButton
                                id="how-i-joined-the-raiders-of-the-lost-ark"
                                namespace="post" onPressUp={(x) => { setcore(x.attributes.totalScore) }}
                            />

                            <p>Total likes: {item.likes}</p>
                            <p>Total dislikes: {item.dislikes}</p>
                            <button
                                onClick={(e) => handleClick(item.id, e)}
                                className="trash margin"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;

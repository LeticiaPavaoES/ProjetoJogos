import { useState } from "react";
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa'
import Header from "../components/header";

export const Cart = () => {
    const [data, setData] = useState(getItem('glibrary') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id); // Usando 'filter' em vez de 'Filter'
        setData(arrFilter);
        setItem('glibrary', arrFilter);
    };

    const Separator = () => {
        return (
            <div className='separator'></div>
        );
    };

    return (
        <div className='StorePage'>
        <Header />
        <Separator />
        <Separator />
            <div className="libraryitems">
                <div className="GamesArea">
                {data.map((e) => ( 
                    <div key={e.id}> 
                        <h4>{e.name}</h4>
                        <img src={e.background_image} alt={e.name}/>
                        <button onClick={() => removeItem(e)}>
                            <MdOutlineLibraryAddCheck />
                        </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;

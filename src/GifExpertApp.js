import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon Ball Z', 'Naruto'];
    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Boku No Hero']);
    //     setCategories(categs => [...categs, 'Boku No Hero']);
    // };


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
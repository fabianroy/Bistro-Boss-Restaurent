import { useEffect, useState } from 'react';
import SectionTitle from './../../components/SectionTitle';
import Menu from '../menu/Menu';
const PopularMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])

    return (

        <div className='mt-16 max-w-screen-xl mx-auto'>
            <section>
                <SectionTitle subheading='Check it out' heading='For Our Menu'></SectionTitle>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        menu.map(item => <Menu key={item._id} item={item}></Menu>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;
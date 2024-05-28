import { useEffect, useState } from "react";
import SectionTitle from './../../components/SectionTitle';

const ChefRecommends = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                const chefRecommends = data.filter(item => item.category === 'offered');
                setItems(chefRecommends);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <section>
                <SectionTitle subheading='Should Try' heading='Chef Recommends'></SectionTitle>

                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {
                        items.map((item, index) => <div className="md:w-60 border text-center items-center" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3 className="font-semibold text-lg px-2 py-4">{item.name}</h3>
                            <p className="px-2">{item.recipe}</p>
                            <button className="mt-4 btn bg-yellow-500 mb-2">ADD TO CART</button>
                        </div>)
                    }

                </div>
            </section>
        </div>
    );
};

export default ChefRecommends;
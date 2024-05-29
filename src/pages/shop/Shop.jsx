import PageCover from "../../components/PageCover";
import banner from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCart from "./FoodCart";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {

    const categories = ['salad', 'soup', 'dessert', 'pizza', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Shop</title>
            </Helmet>
            <PageCover img={banner} title={'Order Food'} subtitle={'Would you like to try a dish?'}></PageCover>
            <section className="max-w-screen-xl mx-auto my-16">
                <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList className='text-center text-orange-600 font-semibold text-xl'>
                        <Tab>Salad</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <div className="my-16">
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                {
                                    salad.map(item => <FoodCart key={item._id} item={item} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6">
                                {
                                    soup.map(item => <FoodCart key={item._id} item={item} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6">
                                {
                                    dessert.map(item => <FoodCart key={item._id} item={item} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6">
                                {
                                    pizza.map(item => <FoodCart key={item._id} item={item} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6">
                                {
                                    drinks.map(item => <FoodCart key={item._id} item={item} />)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </div>
    );
};

export default Shop;
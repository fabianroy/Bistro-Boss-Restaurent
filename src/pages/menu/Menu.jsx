import { Helmet } from 'react-helmet-async';
import PageCover from '../../components/PageCover';
import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from './../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertbg from '../../assets/menu/dessert-bg.jpeg';
import soupbg from '../../assets/menu/soup-bg.jpg';
import pizzabg from '../../assets/menu/pizza-bg.jpg';
import saladbg from '../../assets/menu/salad-bg.jpg';

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>
            <PageCover img={menuImg} title={'Our Menu'} subtitle={'Would you like to try a dish?'}></PageCover>

            <div className='max-w-screen-xl mx-auto'>
                {/* Main Cover */}
                <section className=' my-16'>
                    <SectionTitle heading={'Todays Offer'} subheading={'Dont Miss'}></SectionTitle>

                    {/* Offered Items */}
                    <MenuCategory items={offered}></MenuCategory>
                </section>

                {/* Dessert */}
                <section>
                    <MenuCategory items={dessert} title={'dessert'} img={dessertbg}></MenuCategory>
                </section>

                {/* Soup */}
                <section>
                    <MenuCategory items={soup} title={'soup'} img={soupbg}></MenuCategory>
                </section>

                {/* Salad */}
                <section>
                    <MenuCategory items={salad} title={'salad'} img={saladbg}></MenuCategory>
                </section>

                {/* Pizza */}
                <section>
                    <MenuCategory items={pizza} title={'pizza'} img={pizzabg}></MenuCategory>
                </section>
            </div>
        </div>

    );
};

export default Menu; 
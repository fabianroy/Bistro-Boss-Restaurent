import Banner from '../home/Banner';
import Category from './Category';
import Intro from './Intro';
import PopularMenu from './PopularMenu';
import ChefRecommends from './ChefRecommends';
import Featured from './Featured';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Intro></Intro>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
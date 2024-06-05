import { Link } from 'react-router-dom';
import PageCover from '../../components/PageCover';
import MenuItems from '../home/MenuItems';
import PropTypes from 'prop-types';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='mt-20'>
            {title && <PageCover img={img} title={title} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></PageCover>}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20 mb-6">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className='w-fit mx-auto'>
                <Link to={`/shop/${title}`} className='btn btn-outline border-0 border-b-4 mt-6 text-xl text-center'>Order Your Favorite Food</Link>
            </div> 
        </div>
    );
};

export default MenuCategory;

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.string
};
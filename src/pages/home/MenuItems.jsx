import PropTypes from 'prop-types';
const Menu = ({ item }) => {

    const { image, price, recipe, name } = item;

    return (
        <div>
            <div className="flex flex-row gap-4 mb-4">
                <img style={{ borderRadius: '0 50px 0px 50px' }} className="w-[120px]" src={image} alt="" />
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p>{recipe}</p>
                </div>
                <p className="font-semibold text-yellow-600">BDT {price}</p>
            </div>
        </div>
    );
};

export default Menu;

Menu.propTypes = {
    item: PropTypes.object
};
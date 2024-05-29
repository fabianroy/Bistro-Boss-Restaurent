import PropTypes from 'prop-types';
const FoodCart = ({ item }) => {

    const { name, price, image, recipe } = item;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className='text-lg font-semibold text-orange-500'>${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-orange-400 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCart;

FoodCart.propTypes = {
    item: PropTypes.object
};
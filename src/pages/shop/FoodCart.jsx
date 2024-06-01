import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const FoodCart = ({ item }) => {

    const { name, price, image, recipe } = item;

    const {user} = useAuth();

    const navigate = useNavigate();

    const handleAddToCart = food => {
        if (user && user.email) {
            // Add to cart 
        } else {
            Swal.fire({
                title: 'Login Required',
                text: 'Please login to add items to cart.',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Login',
                cancelButtonColor: 'red',   
                confirmButtonColor: 'blue',
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className='text-lg font-semibold text-orange-500'>${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-orange-500 border-orange-500 hover:bg-orange-500">Add to Cart</button>
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
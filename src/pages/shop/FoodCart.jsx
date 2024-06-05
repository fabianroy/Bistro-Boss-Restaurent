import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useCart from '../../hooks/useCart';
const FoodCart = ({ item }) => {

    const { name, price, image, recipe, _id, category } = item;

    const { user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                category,
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);

                    // refetch cart to update the cart items count
                    refetch();

                    Swal.fire({
                        title: 'Success',
                        text: 'Item added to cart.',
                        icon: 'success'
                    });
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to add item to cart.',
                        icon: 'error'
                    });
                });
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
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>

            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className='text-lg font-semibold text-orange-500'>${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 text-orange-500 border-orange-500 hover:bg-orange-500">Add to Cart</button>
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
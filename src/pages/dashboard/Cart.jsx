import { FaCcStripe, FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const Cart = () => {

    const [cart, refetch] = useCart();
    const axiosSecure = useAxios();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure to remove the item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        })
            .then(res => {
                if (res.isConfirmed) {
                    axiosSecure.delete(`/carts/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire("Deleted!", "Your item has been removed.", "success");
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-2xl font-semibold">Items : {cart.length}</h2>
                <h2 className="text-2xl font-semibold">Total Price : BDT {totalPrice}</h2>
                <button className="btn md:btn-lg btn-primary text-white italic">Pay with <FaCcStripe className="text-4xl" /></button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Photo</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr key={item._id}>
                                    <td>
                                        {cart.indexOf(item) + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">{item.category}</div>
                                    </div></td>
                                    <td className="font-semibold text-orange-600">
                                        BDT {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error text-white"><FaTrash /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
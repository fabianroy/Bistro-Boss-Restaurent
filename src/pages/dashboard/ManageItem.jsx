import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const ManageItem = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxios();

    const handleRemoveItem = item => {
        Swal.fire({
            title: `Are you sure to remove ${item.name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        })
            .then(res => {
                if (res.isConfirmed) {
                    axiosSecure.delete(`/menu/${item._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire("Deleted!", `${item.name} has been removed.`, "success");
                            }
                        });
                }
            });
    }

    return (
        <div>
            <div className="flex items-center justify-evenly my-4">
                <h2 className="text-3xl font-semibold">All Users</h2>
                <h2 className="text-3xl font-semibold">Total Users : {menu.length} </h2>
            </div>

            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-semibold">{item.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-semibold">{item.category}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-semibold text-orange-600">BDT {item.price}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning text-white"><FaEdit /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleRemoveItem(item)} className="btn btn-error text-white"><FaTrash /></button>
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

export default ManageItem;
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";

const UpdateItem = () => {

    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxios();
    const item = useLoaderData();
    const navigate = useNavigate();

    const { name, category, price, recipe, _id } = item;

    const onSubmit = async (data) => {
        console.log(data);

        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
        };

        const menuRes = await axiosSecure.put(`/menu/${_id}`, menuItem);
        if (menuRes.data.modifiedCount > 0) {
            navigate('/dashboard/manageitems');
            Swal.fire({
                icon: 'success',
                title: `${data.name} updated successfully`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Update {name}</h2>
            <div className="w-full m-4 md:m-4 md:w-[500px] md:mx-auto md:my-20 shadow-lg p-6 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Item Name"
                            className="input input-bordered border-yellow-500 w-full"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <select
                            className="select select-bordered w-full border-yellow-500"
                            defaultValue={category}
                            {...register('category', { required: true })}
                        >
                            <option disabled selected value='default'>Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="maincourse">Main Course</option>
                            <option value="drinks">Drinks</option>
                            <option value="offered">Offered</option>
                            <option value="popular">Popular</option>
                        </select>
                        <input
                            type="text"
                            defaultValue={price}
                            placeholder="Item Price"
                            className="input input-bordered w-full border-yellow-500"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            defaultValue={recipe}
                            placeholder="Add Recipe"
                            className="textarea textarea-bordered textarea-sm w-full border-yellow-500"
                            {...register('recipe')}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-warning w-full mt-4">
                            <FaUpload /> Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
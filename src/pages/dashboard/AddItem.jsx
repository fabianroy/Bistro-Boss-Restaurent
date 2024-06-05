import { useForm } from "react-hook-form";
import { FaUtensils } from 'react-icons/fa';
import usePublicAxios from '../../hooks/usePublicAxios';
import useAxios from '../../hooks/useAxios';
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = usePublicAxios();
    const axiosSecure = useAxios();

    const onSubmit = async (data) => {
        console.log(data);

        // Upload image to imbb and get the image url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: `${data.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Add Item</h2>
            <div className="w-full m-4 md:m-4 md:w-[500px] md:mx-auto md:my-20 shadow-lg p-6 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="input input-bordered border-yellow-500 w-full"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <select
                            className="select select-bordered w-full border-yellow-500"
                            {...register('category', { required: true })}
                        >
                            <option disabled selected value='default'>Category</option>
                            <option value="offered">Offered</option>
                            <option value="popular">Popular</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Item Price"
                            className="input input-bordered w-full border-yellow-500"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Add Recipe"
                            className="textarea textarea-bordered textarea-sm w-full border-yellow-500"
                            {...register('recipe')}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-warning w-full"
                            {...register('image', { required: true })}
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-warning w-full mt-4">
                            <FaUtensils /> Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;

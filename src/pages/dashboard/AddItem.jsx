import { useForm } from "react-hook-form";
import { FaUtensils } from 'react-icons/fa';

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSUbmit = data => {
        console.log(data);
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Add Item</h2>
            <div className="w-full m-4 md:m-4 md:w-[500px] md:mx-auto md:my-20 shadow-lg p-6 rounded-xl">
                <form onSubmit={handleSubmit(onSUbmit)}>
                    <div className="mb-4">
                        <input type="text" placeholder="Item Name" className="input input-bordered border-yellow-500 w-full" {...register('name', {required: true})} />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <select className="select select-bordered w-full border-yellow-500" {...register('category' , {required: true})}>
                            <option disabled selected value='default'>Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        <input type="number" placeholder="Item Price" className="input input-bordered w-full border-yellow-500" {...register('price', {required: true})} />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Add Recipe" className="textarea textarea-bordered textarea-sm w-full border-yellow-500" {...register('recipe')}></textarea>
                    </div>
                    <div>
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full" {...register('image', {required: true})} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-warning w-full mt-4"><FaUtensils />Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
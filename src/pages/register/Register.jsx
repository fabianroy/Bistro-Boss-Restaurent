import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import usePublicAxios from "../../hooks/usePublicAxios";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
    const axiosPublic = usePublicAxios();
    const navigate = useNavigate();
    const { createUser, updateProfileInfo } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfileInfo(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: user.email,
                            photoURL: data.photoURL,
                            password: data.password,
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('Account created successfully!');
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success',
                                        text: 'Account created successfully!',
                                        confirmButtonText: 'OK'
                                    })
                                        .then(() => {
                                            navigate('/');
                                        });
                                }
                            });
                    });
            });
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Register</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" {...register("photoURL", { required: true })} placeholder="Your Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/
                                })} placeholder="Your Password (Must be at least 8 characters)" className="input input-bordered" />
                                {/* eight characters including one uppercase letter, one lowercase letter, and one number or special character. */}
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required.</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 8 characters.</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-white bg-orange-500">Register</button>
                            </div>
                            <p className='mt-4'>Already have an account? <Link className='text-orange-500' to='/login'>Login here</Link>.</p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

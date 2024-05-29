import { Link } from 'react-router-dom';
import errorImage from '../../assets/others/404.gif'

const ErrorPage = () => {
    return (
        <div className='w-fit mx-auto'>
            <img className='w-full' src={errorImage} alt="" />
            <p className='text-2xl font-semibold text-center'>Page Not Found</p>
            <div className='w-fit mx-auto mt-4'>
                <Link className='btn' to='/'>Back to safety</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
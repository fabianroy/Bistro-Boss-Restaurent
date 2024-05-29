import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const PageCover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}>

            <div>
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-10 text-5xl font-bold uppercase">{title}</h1>
                            <p className='text-lg'>{subtitle}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Parallax>
    );
};

export default PageCover;

PageCover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};
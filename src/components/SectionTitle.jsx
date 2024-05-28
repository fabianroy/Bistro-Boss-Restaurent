import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center mb-16'>
            <p className='text-yellow-600 italic text-md'>--- {subheading} ---</p>
            <h3 className='text-4xl uppercase mt-4 border-t-2 border-b-2 border-yellow-500 w-fit mx-auto p-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};
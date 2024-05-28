import { useEffect, useState } from 'react';
import SectionTitle from './../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <section>
                <SectionTitle subheading='What our client says' heading='Testimonials'></SectionTitle>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='m-24 flex flex-col items-center'>
                                <Rating 
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='my-6'>{review.details}</p>
                                <h3 className='text-2xl text-center text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;
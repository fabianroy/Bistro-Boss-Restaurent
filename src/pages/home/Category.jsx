import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <section>

                <SectionTitle subheading={'From 10:00 AM To 11:30 PM'} heading={'Order Online'}></SectionTitle>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="slide1" />
                        <h4 className='text-3xl uppercase text-center -mt-12 text-white pb-4'>Salads</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="slide2" />
                        <h4 className='text-3xl uppercase text-center -mt-12 text-white pb-4'>Pizzas</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="slide3" />
                        <h4 className='text-3xl uppercase text-center -mt-12 text-white pb-4'>Soups</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="slide4" />
                        <h4 className='text-3xl uppercase text-center -mt-12 text-white pb-4'>Desserts</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="slide5" />
                        <h4 className='text-3xl uppercase text-center -mt-12 text-white pb-4'>Salads</h4>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;
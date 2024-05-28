import SectionTitle from './../../components/SectionTitle';
import featuredImage from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='mt-20'>
            <section className='bg-[url(assets/home/featured.jpg)] bg-fixed w-full bg-cover bg-center bg- py-20'>
                <div className='backdrop-blur-sm text-white'>
                    <SectionTitle subheading='Check it out' heading='From Our Menu'></SectionTitle>
                    <div className='flex gap-10 items-center w-[900px] mx-auto'>
                        <img className='w-96' src={featuredImage} alt="" />
                        <div className='w-2/4'>
                            <p className='text-xl mb-2'>MAY 28, 2024</p>
                            <p className='text-xl mb-2'>WHERE CAN I GET SOME?</p>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='btn btn-outline border-0 border-b-4 text-white border-white mt-6 text-xl'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;
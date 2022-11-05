import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/author'
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function section1() {
    SwiperCore.use([Autoplay]);
    const bg = {
        backgroundImage: "url('/images/banner.png')",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat"
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        "delay": 2000,
                    }}
                >
                    <SwiperSlide> {Slide()} </SwiperSlide>
                    <SwiperSlide>Rifat </SwiperSlide>
                    <SwiperSlide> {Slide()} </SwiperSlide>
                    ...
                </Swiper>
               
            </div>
        </section>
    )
};

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link className="" href="/posts/post">
                    <Image src="/images/img1.jpg" width="500" height="500" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/posts/post"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/posts/post"} className="text-gray-800 hover:text-gray-600">- July 3, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/posts/post"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}

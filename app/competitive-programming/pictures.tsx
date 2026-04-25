'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export default function PictureSlideshow() {
    const [pictures, setPictures] = useState<string[] | null>(null);

    useEffect(() => {
        async function fetchPictures() {
            const pictures = await fetch('https://api.gianpena.xyz/pictures');
            const picturesText = await pictures.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(picturesText, 'text/html');
            const images = Array.from(doc.images);
            const URLs: string[] = [];
            images.forEach(image => {
                const srcset = image.getAttribute('srcset');
                if(!srcset) return;
                const URL = srcset.split(' ').at(-2);
                if(URL) URLs.push(URL);
            });

            setPictures(URLs);
            console.log(URLs);
        }

        console.log('Retrieving pictures...');
        fetchPictures().then(() => { console.log('Pictures retrieved'); }).catch(error => console.log(error));

    }, []);

    if(!pictures)
        return <span className='loading'>Loading</span>

    return (
        <div style={{ overscrollBehavior: 'none' }}>
            <Swiper
                modules={[Scrollbar, Mousewheel, FreeMode]}
                spaceBetween={10}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                mousewheel={{ forceToAxis: false, releaseOnEdges: false }}
                freeMode={true}
                grabCursor={true}
            >
                {pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <a href={picture}>
                            <img src={picture} alt={`Picture ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

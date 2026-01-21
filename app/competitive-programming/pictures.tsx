'use client';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';


export default function PictureSlideshow() {

    const [pictures, setPictures] = useState<string[] | null>(null);
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        containScroll: 'trimSnaps'
    });

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
        return <p><i>Loading pictures...</i></p>;

    return (
        <div className="embla" ref={emblaRef} style={{paddingTop:'100px'}}>
            <div className="embla__container">
                {pictures.map((picture, index) => (
                    <div className="embla__slide" key={`hspc-picture-${index}`}>
                        <img width="600" src={picture} alt={`Picture ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );

}
'use client';
import { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function PictureSlideshow() {
    const [pictures, setPictures] = useState<string[] | null>(null);
    const [periods, setPeriods] = useState<number>(1);
    const periodsInterval = useRef<NodeJS.Timeout | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({
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
                if (!srcset) return;
                const URL = srcset.split(' ').at(-2);
                if (URL) URLs.push(URL);
            });

            setPictures(URLs);
            console.log(URLs);
        }

        console.log('Retrieving pictures...');
        fetchPictures().then(() => { console.log('Pictures retrieved'); }).catch(error => console.log(error));

        periodsInterval.current = setInterval(() => {
            setPeriods(p => {
                p--;
                p = (p + 1) % 3;
                p++;
                return p;
            });
        }, 100);

        // Add wheel event listener for horizontal scrolling
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            if (event.deltaY > 0) {
                emblaApi?.scrollNext();
            } else {
                emblaApi?.scrollPrev();
            }
        };

        const emblaNode = emblaApi?.rootNode();
        if (emblaNode) {
            emblaNode.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (periodsInterval.current) {
                clearInterval(periodsInterval.current);
            }
            if (emblaNode) {
                emblaNode.removeEventListener('wheel', handleWheel);
            }
        };
    }, [emblaApi, emblaRef]);

    if (!pictures)
        return <p><i>Loading pictures{'.'.repeat(periods)}</i></p>;

    return (
        <div className="embla" ref={emblaRef} style={{ paddingTop: '100px', paddingBottom: '10px' }}>
            <div className="embla__container">
                {pictures.map((picture, index) => (
                    <div className="embla__slide" key={`hspc-picture-${index}`}>
                        <img width="500" src={picture} alt={`Picture ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

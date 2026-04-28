import { parse } from 'node-html-parser';
import Slideshow from "@/competitive-programming/slideshow";

export default async function Pictures() {
    const pictures = await fetch('https://academy.cis.fiu.edu/gallery-hspc25/', {
        signal: AbortSignal.timeout(3000)
    });
    if(!pictures.ok)
        return (
            <div>
                Unable to load pictures; see them <a href="https://academy.cs.fiu.edu/hspc-competitions/">here directly!</a>
            </div>
        );

    const picturesText = await pictures.text();
    const doc = parse(picturesText);
    const images = doc.querySelectorAll('img');
    const URLs: string[] = [];
    images.forEach(image => {
        const srcset = image.getAttribute('srcset');
        if(!srcset) return;
        const url = srcset.split(' ').at(-2);
        if(url) URLs.push(url);
    });

    return <Slideshow pictures={URLs} />

}
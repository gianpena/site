import Link from "next/link";
import Image from "next/image";
import insignia from '../public/insignia.png'

export default function Header() {
    const pages = [
        { name: 'Projects', path: '/projects' },
        { name: 'Speedtyping', path: '/speedtyping' }
    ];

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <Link href="/">
                <Image src={insignia} alt="Insignia" width={30} height={30} style={{paddingRight: '10px'}}/>
            </Link>
            {pages.map((page, index) => (
                <Link key={index} href={page.path} style={{textDecoration: 'none'}}>{page.name}</Link>
            ))}
        </div>
    )
}
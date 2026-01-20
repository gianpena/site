import Link from "next/link";
import Image from "next/image";

import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';

export default function Footer() {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <Link className="darken" key="my-github-profile" href="https://github.com/gianpena">
                <Image alt="github" src={github} width={30} height={30}/>
            </Link>
            <Link className="darken" key="my-linkedin-profile" href="https://www.linkedin.com/in/gian-pena/">
                <Image alt="linkedin" src={linkedin} width={30} height={30}/>
            </Link>
        </div>
    );
}
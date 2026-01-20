import Link from 'next/link';

export default function Button({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link key={null} href={href}>
            <div className="button darken">
                {children}
            </div>
        </Link>
    )
}
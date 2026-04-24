import {NextRequest, NextResponse} from "next/server";


export function proxy(req: NextRequest) {
    const url = req.nextUrl;
    const lower = url.pathname.toLowerCase();
    if (lower === url.pathname) return NextResponse.next();
    url.pathname = lower;
    return NextResponse.redirect(url);
}
export async function GET() {
    const res = await fetch('https://raw.githubusercontent.com/gianpena/resume/main/resume.pdf');
    return new Response(res.body, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="resume.pdf"',
        },
    });
}

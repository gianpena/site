export async function GET() {
    const res = await fetch('https://raw.githubusercontent.com/gianpena/resume/main/resume.pdf');
    const pdf = await res.arrayBuffer();
    return new Response(pdf, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="resume.pdf"',
        },
    });
}

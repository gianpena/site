import { redirect } from 'next/navigation';

export async function GET() {
    redirect('https://raw.githubusercontent.com/gianpena/resume/main/resume.pdf');
}

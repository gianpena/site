import type { RequestHandler } from './$types';

const RESUME_URL = 'https://raw.githubusercontent.com/gianpena/resume/refs/heads/main/resume.pdf';

export const GET: RequestHandler = async () => {
	const response = await fetch(RESUME_URL);
	if (!response.ok || !response.body) {
		return new Response(`Failed to retrieve resume: ${response.status}`, { status: 502 });
	}

	return new Response(response.body, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="resume.pdf"',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};

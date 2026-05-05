
export default async function resume(){
    return (
        <div className="centered">
            <span style={{ marginBottom: '20px' }}>
                This is my resume, which can be found on <a href="https://github.com/gianpena/resume">my github!</a>
            </span>
            <iframe
                className="resume-iframe"
                src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/gianpena/resume/main/resume.pdf&embedded=true"
                frameBorder="0">
            </iframe>
        </div>
    );
}
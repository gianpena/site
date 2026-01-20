import { UAParser } from 'ua-parser-js';
import { headers } from 'next/headers';

export default async function Home() {
    const headerList = headers();
    const userAgent = (await headerList).get('user-agent') || '';
    const deviceType = new UAParser(userAgent).getDevice().type || 'desktop';

    return (
    <div className="centered" style={{width: "50%", textAlign: "center", margin: '0 auto', fontSize: deviceType === 'mobile' ? '1.2em' : '1.5em'}}>
        I'm Gian Peña, a student at Florida International University's College of Engineering and Computing. I'm a competitive programmer, and the current "captain" of FIU's ICPC team. I also love speedtyping (currently top 100 worldwide on monkeytype and typeracer!) and playing video games. Thanks for stopping by!
    </div>
  );
}

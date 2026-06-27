import { UAParser } from 'ua-parser-js';
import { headers } from 'next/headers';
import AnimateOnVisible from './animate-on-visible';

export default async function Home() {
    const headerList = headers();
    const userAgent = (await headerList).get('user-agent') || '';
    const deviceType = new UAParser(userAgent).getDevice().type || 'desktop';

    return (
    <>
      <div className="centered" style={{width: "50%", textAlign: "center", margin: '0 auto', fontSize: deviceType === 'mobile' ? '1.2em' : '1.5em'}}>
          <AnimateOnVisible>
              <header style={{fontSize: '72px', fontFamily: 'Playfair Display', paddingBottom: '1em', animation: 'fadeIn 1s ease forwards'}}>
                  <i>
                      Hello!
                  </i>
              </header>
              <div style={{opacity: 0, animation: 'fadeIn 0.6s ease 0.6s forwards'}}>
                  I'm Gian Peña, a student at Florida International University's College of Engineering and Computing. I'm a competitive programmer, and the current "captain" of FIU's ICPC team. I also love speedtyping (currently top 100 worldwide on monkeytype and typeracer!) and playing video games. Thanks for stopping by!
              </div>
          </AnimateOnVisible>
      </div>
    </>
  );
}

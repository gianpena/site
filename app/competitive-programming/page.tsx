import PictureSlideshow from './pictures';

export default function CompetitiveProgrammingPage() {
    return (
        <div style={{minHeight: '92vh', paddingTop: '30px'}}>
            <p>
                I've been doing competitive programming since 2018. I normally do not compete in online contests, but I do problems on various online judges.
            </p>
            <p>
                More recently (and perhaps more significantly), I've been organizing FIU's High School Programming Contest (HSPC) since 2024. It's an annual contest for middle and high school students in Florida, and it's fun being on the other side of the table as an organizer after having participated in related contests since middle school!
            </p>
            <p>
                Click and drag the carousel below to see pictures from our last high school programming contest!
            </p>

            <PictureSlideshow />
        </div>
    );
}
import Card from '../card';
import Button from '../button';
import '../styles.css';


export default async function ProjectsPage() {

    return (
        <div className="centered" style={{'gap': '20px'}}>
            <div style={{fontSize: '20px'}}>
                Some things I've worked on! Note that this isn't <i>everything</i>.
            </div>

            <div className="card-container">
                <Card title="BedStats">
                    A discord bot made to track Hypixel Bedwars statistics.
                    <div style={{height: '20px'}}></div>
                    <Button href="https://bedstats.net/">
                        <b>View</b>
                    </Button>
                </Card>
                <Card title="This website!">
                    :)
                    <div style={{height: '20px'}}></div>
                    <Button href="https://github.com/gianpena/site">
                        <b>View</b>
                    </Button>
                </Card>
            </div>



        </div>
    );

}
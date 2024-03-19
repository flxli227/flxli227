import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
import Video from './../components/video/Video'

function Coinbox() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Coinbox is a submission for the Level-up competition held by Imperial College Advanced Hackspace which took 4 weeks.
                <br/><br/>
                It is a replica of a coin box found in the Super Mario Bros series which is also a chocolate coin dispenser.
            </p>

            <h2>Ideation</h2>
            <p>Initial concept and basic mechanism</p>
            <img 
                src={require("./../assets/Coinbox/Coinbox gif works.gif")}
                alt="Mario coinbox in the Super Mario Bros series"
            />
            <img 
                src={require("./../assets/Coinbox/Level Up-01.jpg")}
                alt="Preliminary brainstorm of mechanism of coin launching from the box"
            />
            <h2>Product Design Specification</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Target-cropped.png"),
                            alt: "Target Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Consistently eject coins to a similar location"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Ejection Seat-cropped.png"),
                            alt: "Ejection Seat Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Eject a single coin per punch"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Boxes-cropped.png"),
                            alt: "Boxes Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Store up to at least 10 Coins"
                    },
                ]}
            />            
            <h2>Prototyping</h2>
            <p>After determining the product design specification, it was clear that a more sophisticated mechanism was needed.</p>
            <Gallery
                images={[
                    require("./../assets/Coinbox/20180826_175831.jpg"),
                    require("./../assets/Coinbox/20180826_211027.jpg"),
                    require("./../assets/Coinbox/20180908_195301.jpg"),
                ]}
            />
            <Video path={require("./../assets/Coinbox/03 - Prototype 1 Cut 1.mp4")}/>
            <Video path={require("./../assets/Coinbox/05 - Prototype 1.1 Cut.mp4")}/>

            <p>Once the mechanism was prototyped, minor changes were made and the final build commenced.</p>

            <Video path={require("./../assets/Coinbox/04 - Prototype 1.2 Cut.mp4")}/>
            <Video path={require("./../assets/Coinbox/01 - Final Build Fails.mp4")}/>

            <Video path={require("./../assets/Coinbox/02 - Final Montage.mp4")}/>
        </>
    )
}

export default Coinbox
import MultiColumn from './../components/multiColumn/MultiColumn'
import YouTube from './../components/youTube/YouTube.js'
import ImageGallery from 'react-image-gallery';

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
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Coinbox/20180826_175831-resized-min.jpg"),
                        thumbnail: require("./../assets/Coinbox/20180826_175831-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Coinbox/20180826_211027-resized-min.jpg"),
                        thumbnail: require("./../assets/Coinbox/20180826_211027-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Coinbox/20180908_195301-resized-min.jpg"),
                        thumbnail: require("./../assets/Coinbox/20180908_195301-thumbnail-min.jpg"),
                    },
                ]}
            />
            <YouTube id="zZjDRcfeX7w"/>
            <p>Once the mechanism was prototyped, minor changes were made and the final build commenced.</p>
        </>
    )
}

export default Coinbox
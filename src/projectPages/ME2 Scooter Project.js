import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery'

function ME2ScooterProject() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                The ME2 Scooter Project is to design and convert a conventional foot-powered scooter into an electric scooter.
                <br/><br/>
                The project was done by Charles Price-Smith, Charlotte Baumhauer, Felix Li (me), Guillermo Garcia, Huiyu Leong, Kharthik Chakravarthy and Xu Tianning.
                <br/><br/>
                I was in charge of the design, and production of the engineering and manufacturing drawings.
            </p>
            <h2>Design</h2>  
            <p>
                The power transmission is a simple belt system with a tensioner. I modelled all of the parts in Solidworks.
                <br/><br/>
                Here are some additional notes for the design:
            </p>          
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Scooter/Scooter CAD-resized-min.jpg"),
                            alt: "Scooter CAD"
                        },
                        title: "Scooter Housing",
                        body:"Made of Mild Steel, strong while being thin to maximise space"
                    },
                    {
                        image: {
                            url: require("./../assets/Scooter/Tensioner-min.jpg"),
                            alt: "Tensioner"
                        },
                        title: "Tensioner",
                        body: "Roller made out of nylon with a bearing to ensure high efficiency"
                    },
                    {
                        image: {
                            url: require("./../assets/Scooter/Wheel-resized-min.jpg"),
                            alt: "Wheel Mount"
                        },
                        title: "Wheel Mount",
                        body: "Plates on either side of the wheel connected by threads running between spokes of the wheel to transmit torque"
                    },
                ]}
            />
            <p>
                From the CAD model, I made the drawings.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Scooter/General Assembly-min.png"),
                        thumbnail: require("./../assets/Scooter/General Assembly-thumbnail-min.png"),
                    },
                    { 
                        original: require("./../assets/Scooter/OUTER HOUSING RIGHT-resized-min.png"),
                        thumbnail: require("./../assets/Scooter/OUTER HOUSING RIGHT-thumbnail-min.png"),
                    },
                ]}
            />
            <p>
                From the drawings, the parts were manufactured and assembled.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    { 
                        original: require("./../assets/Scooter/IMAG0062-resized-min.jpg"),
                        thumbnail: require("./../assets/Scooter/IMAG0062-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Scooter/IMAG0061-resized-min.jpg"),
                        thumbnail: require("./../assets/Scooter/IMAG0061-thumbnail-min.jpg"),
                    },
                ]}
            />
            <h2>Testing</h2>
            <p>
                The scooter was subjected to an efficiency test and put in a race with other groups.
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Race-cropped.png"),
                            alt: "Race flag icon",
                            filters: ["invert(1)"]
                        },
                        title: "Drag race",
                        body: "4th out of 25"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Battery-cropped.png"),
                            alt: "Battery icon",
                            filters: ["invert(1)"]
                        },
                        title: "Efficiency test",
                        body: "3rd out of 25"
                    },
                ]}
            />
            <h2>Conclusion</h2>
            <p>
            It was a really fun project and the raceday was a great way to end my second year of Mechanical Engineering!
            </p>
            <img
                class="contentImage"
                src={require("./../assets/Scooter/IMG-20150604-WA0005.jpg")}
                alt="Felix just before his race"
            />
        </>
    )
}

export default ME2ScooterProject
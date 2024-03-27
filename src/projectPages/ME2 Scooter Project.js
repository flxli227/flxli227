import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery'

function ME2ScooterProject() {
    return (
        <>
            <h2>What is it?</h2>
            <p>The ME2 Scooter project is to convert a conventional foot-powered scooter into an electric scooter.</p>
            <p>All the design, CAD and manufacturing was done by Charles Price-Smith, Charlotte Baumhauer, Felix Li (me), Guillermo Garcia, Huiyu Leong, Kharthik Chakravarthy and Xu Tianning.</p>
            <h2>Design</h2>            
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Scooter/Scooter CAD-min.jpg"),
                            alt: "Scooter CAD"
                        },
                        title: "Scooter Housing",
                        body:
                        <ul>
                            <li>Made of Mild Steel</li>
                            <li>Thin walls to maximise space but still strong enough</li>
                        </ul>
                    },
                    {
                        image: {
                            url: require("./../assets/Scooter/Tensioner-min.jpg"),
                            alt: "Tensioner"
                        },
                        title: "Tensioner",
                        body:
                        <ul>
                            <li>Fitted with bearing to ensure high efficiency</li>
                        </ul>
                    },
                    {
                        image: {
                            url: require("./../assets/Scooter/Wheel-min.jpg"),
                            alt: "Wheel Mount"
                        },
                        title: "Wheel Mount",
                        body:
                        <ul>
                            <li>Plates on either side of the wheel</li>
                            <li>Threads connect the plates</li>
                            <li>Threads run between spokes of the wheel to transmit torque</li>
                        </ul>
                    },
                ]}
            />
            <h2>Manufacturing</h2>
            <p>Engineering drawings were produced and it was manufactured.</p>
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
            <p>The scooter was subjected in an efficiency test and put in a race with other groups.</p>
            <img
                class="contentImage"
                src={require("./../assets/Scooter/IMG-20150604-WA0005.jpg")}
                alt="Felix just before his race"
            />
            <h2>Results</h2>
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
        </>
    )
}

export default ME2ScooterProject
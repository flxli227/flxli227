import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery';

function BarbourGinInfusers() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                9 Barbour inspired Gin Infusers were made a part of a module called I'll Take 9. This aim of this module is to get us to think about batch manufacturing.
                <br/><br/>
                The Barbour Gin Infusers were made by Coco Wu, Faci Jiang, Felix Li (me) and Jed Farquharson.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Gin Infuser/DSF4134 2-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/DSF4134 2-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/Nice Photos-01-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/Nice Photos-01-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/Nice Photos-02-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/Nice Photos-02-thumbnail.png"),
                    },
                ]}
            />
            <h2>Giving and Receiving Ideas</h2>            
            <p>In I'll Take 9, each group is given a brand paired up with an item. The module is split into three phases:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Idea-cropped.png"),
                            alt: "Ideation Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Ideation phase",
                        body:"Come up with a products of their brand item pairing"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Prototype-cropped.png"),
                            alt: "Prototype Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Prototype phase",
                        body:"Prototype their brand item paring"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Manufacturing-cropped.png"),
                            alt: "Manufacturing Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Manufacturing phase",
                        body:"Manufacture a batch of 9 identical products of their brand item pairing"
                    },
                ]}
            />
            <p>
                At the end of the Ideation and Prototype phase groups will pass their project to a randomly assigned group and receive another.
                <br/><br/>
                Each team gets to work on three projects.
            </p>
            <h2>Ideation Phase</h2>
            <p>The object and the brand we received were:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Gin Infuser/logo-bic.png"),
                            alt: "Bic Logo",
                        },
                        title:"Bic"
                    },
                    {
                        image: {
                            url: require("./../assets/Gin Infuser/Tea Strainer.png"),
                            alt: "A tea strainer",
                        },
                        title:"Tea Strainer"
                    },
                ]}
            />
            <p>The brand values of BIC are:</p>
            <p>“Simple, inventive and reliable choices for everyone, everywhere, every time.”</p>
            <p>Our group members saw BIC products as:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Gin Infuser/20 Pack.jpg"),
                            alt: "A 20 pack of Bic pens",
                        },
                        body:"Large packs"
                    },
                    {
                        image: {
                            url: require("./../assets/Gin Infuser/Products.jpg"),
                            alt: "A few Bic Products",
                        },
                        body:"Cheap"
                    },
                    {
                        image: {
                            url: require("./../assets/Gin Infuser/Broken.jpg"),
                            alt: "A broken pen on the ground",
                        },
                        body:"Disposable"
                    },
                ]}
            />
            <p>Our concept was the BIC Tea capsules filled with loose tea leaves and BIC Tea stirrers. The user attaches the Tea Capsule onto the Stirrer and leaves it in hot water to steep. When the infusion is complete, they can eject the Capsule from the Stirrer and the Stirrer can be reused. Large refill packs of capsules and stirrers can be purchased.</p>
            <img 
                src={require("./../assets/Gin Infuser/Stirrer Narative-resized-min.jpg")} 
                alt="A comic on how to use the Bic tea strainer / stirrer"
            />
            <h2>Prototype Phase</h2>
            <p>
                The concept we received was a Paul Smith Pasta Server.
                <br/><br/>
                The idea was to put the pasta in the Pasta Server and then put the Pasta Server into Boiling water. When the pasta is done, drain it with the Pasta Server and add the sauce into it. Shake the Pasta Server to mix the pasta and sauce. To serve, pour out the contents of the Pasta Server.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Gin Infuser/IT9 Concept Presentation Team7-7-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IT9 Concept Presentation Team7-7-thumbnail.png"),
                    },
                    {
                        original: require("./../assets/Gin Infuser/IT9 Concept Presentation Team7-8-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IT9 Concept Presentation Team7-8-thumbnail.png"),
                    },
                ]}
            />
            <p>Before we started to prototype the Pasta Server, we wanted to test a few things:</p>
            <ul>
                <li>
                    Would the Pasta Sauce spill out of the holes used to the drain the pasta?
                </li>
                <li>
                    Can the pasta and sauce be mixed by shaking the Pasta Server?
                </li>
                <li>
                    Can pasta be served reliably by pouring out of a teapot like structure?
                </li>
            </ul>
            <Video path={require("./../assets/Gin Infuser/01 - Mixing-resized.mp4")}/>
            <Video path={require("./../assets/Gin Infuser/02 - Pouring-resized.mp4")}/>
            <Video path={require("./../assets/Gin Infuser/03 - Sauce Dripping-resized.mp4")}/>
            <ul>
                <li>
                    The sauce was thick enough to not spill out.
                </li>
                <li>
                    The pasta and the sauce can be mixed by shaking.
                </li>
                <li>
                    The pasta can also be served by pouring.
                </li>
            </ul>
            <p>Now that the concept is tested, we made three prototypes of the Pasta Server:</p>
            <img 
                src={require("./../assets/Gin Infuser/IMG_6552-resized-min.jpg")} 
                alt="3 pasta server prototypes, plastic, metal and clay"
            />
            <p>We felt the most realistic prototype is the one made out of ceramics (right) because ceramics is food-safe and can withstand heat.</p>
            <p>The proposed manufacturing method is press moulding, biscuit firing and then glazing.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Gin Infuser/IMAG0925-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMAG0925-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_6507-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_6507-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_6546-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_6546-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_20170317_161209-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_20170317_161209-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_20170319_111435-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_20170319_111435-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_20170319_212352-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_20170319_212352-thumbnail.png"),
                    },
                    { 
                        original: require("./../assets/Gin Infuser/IMG_20170319_212401-resized-min.jpg"),
                        thumbnail: require("./../assets/Gin Infuser/IMG_20170319_212401-thumbnail.png"),
                    },
                ]}
            /> 
            <h2>Manufacturing Phase</h2>
            <p>The concept we received was a Barbour Gin Infuser.</p>
            <p>The user collects herbs and fruit and places it inside the Gin Infuser. When applying the lid, the contents of the Infuser will be crushed. The Infuser is put into a bottle of vodka and the flavours of the herbs and fruit will infuse into the drink.</p>
            <p>The Gin Infuser is primarily made of untreated wood so some of the Gin soaks in and is present in future drinks.</p>
            <img 
                src={require("./../assets/Gin Infuser/Handover stuff.png")} 
                alt="The prototype Gin infuser the other group handed over to us"
            />
            <p>The design received some changes. To create 9 identical products engineering drawings were produced and manufacturing commenced.</p>
            <Gallery
                images={[
                    require("./../assets/Gin Infuser/Bottom-01-resized-min.png"),
                    require("./../assets/Gin Infuser/Final Assembly-resized-min.png"),
                    require("./../assets/Gin Infuser/Edgy Designer Photo-01-resized-min.jpg"),
                    require("./../assets/Gin Infuser/IMAG0947-resized-min.jpg"),
                    require("./../assets/Gin Infuser/IMAG0949-resized-min.jpg"),
                ]}
            /> 
        </>
    )
}

export default BarbourGinInfusers
import MultiColumn from './../components/multiColumn/MultiColumn'

function NewSpawnBaby() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                New Spawn Baby is a short film done in a two-day speculative design workshop.
                <br/><br/>
                New Spawn Baby is made by Dougie Mann, Felix Li (me), Hazel Yan, Jed Farquharson and Simon Cundall.
            </p>
            <h2>What is it about?</h2>
            <p>
                New Spawn Baby is set in a dystopian future where pornography is abundant and an authoritarian government is taking a radical approach to combat declining birth rates.
                <br/><br/>
                The film encourages viewers to think about weak signals (trends) that may affect the future of our society such as:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Lower Birthrate-cropped.png"),
                            alt: "Declining Birth rate Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Declining Birth Rates"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Love TV-cropped.png"),
                            alt: "Love TV Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Pornography Addiction"
                    },
                ]}
            />
        </>
    )
}

export default NewSpawnBaby
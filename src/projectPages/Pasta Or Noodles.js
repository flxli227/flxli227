import MultiColumn from './../components/multiColumn/MultiColumn'

function PastaOrNoodles() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                I built a tool to see if an image was pasta or noodles because I wanted experience in prototyping with machine learning.
                <br/><br/>
                (The code is modified from “Is it a bird? Creating a model from your own data” by Jeremy Howard.)
                <br/><br/>
                Check out the Kaggle Notebook for the Pasta or Noodle <a href="https://www.kaggle.com/code/flxli227/is-it-a-pasta-or-noodle/" target="_blank" rel="noreferrer">here</a> !
                <br/><br/>
                Test the model <a href="https://huggingface.co/spaces/flxli227/Pasta_or_Noodles" target="_blank" rel="noreferrer">here</a>  yourself!
            </p>
            <h2>Gathering Data</h2>
            <p>
                I searched and downloaded images for “pasta photo” and “noodles photo” on DuckDuckGo. 
                <br/><br/>
                Then I resized the images to save space and put the images in their respective pasta or noodles folders.
            </p>
            <img 
                src={require("./../assets/Pasta or Noodles/DataBlock-min.png")}
                alt="Some of the training data used"
            />
            <h2>Training the model</h2>
            <h3>1st iteration</h3>
            <p>
                Then I used those images to train the resnet18 neutral network.
                <br/><br/>
                The model worked but only got a 20% accuracy. 
            </p>
            <img 
                src={require("./../assets/Pasta or Noodles/Initial Model.png")}
                alt="The accuracy of the 1st model"
            />
            <p>
                While testing, I found it sometimes struggled to identify Ho Fun, (a certain type of Chinese Noodle) as a noodle. So I added DuckDuckGo searches of “Ho Fun” and “Spaghetti” to the training data.
            </p>
            <img 
                src={require("./../assets/Pasta or Noodles/HoFun Error-min.png")}
                alt="The model classifying HoFun as a pasta"
            />
            <h3>2nd iteration</h3>
            <p>
                So I added DuckDuckGo searches of “Ho Fun” and “Spaghetti” to the training data.
            </p>
            <p>
                The model improved to a 15.5% accuracy.
            </p>
            <img 
                src={require("./../assets/Pasta or Noodles/2nd Model.png")}
                alt="The accuracy of the 2nd model"
            />
            <p>
                I found there are some pictures in the dataset which are not of pasta or noodles on a plate or bowl but rather: 
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Pasta or Noodles/Packaging.png"),
                            alt: "An image of Noodles in packaging that I removed from the dataset",
                        },
                        title: "Packaging",
                        body: "Noodles in packaging"
                    },
                    {
                        image: {
                            url: require("./../assets/Pasta or Noodles/Precooked.png"),
                            alt: "An image of Noodles in precooked that I removed from the dataset",
                        },
                        title: "Precooked",
                        body: "Noodles precooked and not in a bowl"
                    },
                    {
                        image: {
                            url: require("./../assets/Pasta or Noodles/Clip art.png"),
                            alt: "An clip art of Noodles that I removed from the dataset",
                        },
                        title: "Clip art",
                        body: "Clip art / cartoons of noodles and pasta"
                    },
                ]}
            />
            <p>
                I wanted my model to be good at recognising if a dish contains pasta or noodles, so I removed those images from the dataset.
            </p>
            <h3>Final model</h3>
            <p>
                The model is still not perfect but it’s the best it has been at 7.9% accuracy.
            </p>
            <img 
                src={require("./../assets/Pasta or Noodles/Error.png")}
                alt="The improvement of accuracy from the 1st model to the final model"
            />
            {/* <img 
                src={require("./../assets/Pasta or Noodles/Confusion Matrix.png")}
                alt="The Confusion Matrix of the model"
            /> */}
            <h2>How to improve the model</h2>
            <h4>Include precooked and packaging images</h4>
            <p>
                While getting rid of photos of pasta or noodles in packaging and precooked pasta and noodles improved the accuracy of the model, it would make it worse at recognising pasta or noodles in those states.
                <br/><br/>
                I think the real solution would be to train the model on more images of pasta and noodles in packaging or precooked.
            </p>
            <h4>Include different types of pasta an noodles</h4>
            <p>
                I think I could still improve the model by training it with more data. I would also insure the data has a variety of different pasta shapes (macaroni, fusilli and spagehtti), and colours (such as white sauce or red sauce).
            </p>
            <h4>Include augmented Images</h4>
            <p>
                I could use multiple instance of the same image of pasta or noodles but slightly augmented so the model recognises the shapes and colours which are used to make the distinction between pasta and noodles.
            </p>
            <h2>Conclusion</h2>
            <p>
                This is my first time training a model so I am still getting to grips with it but overall I am happy with the results. I feel confident in making image classifiers in the future.
            </p>
        </>
    )
}

export default PastaOrNoodles
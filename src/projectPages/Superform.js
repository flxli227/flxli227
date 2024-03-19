import React from 'react';
import Gallery from './../components/gallery/Gallery'

function Superform() {
    return (
        <>
            <h2>What is it?</h2>
            <p>Superform is a fold-able cardboard chair for two people.</p>
            <Gallery images={[
                require("./../assets/Superform/IMG_0186 copy.jpg"),
                require("./../assets/Superform/DSCF1739.JPG.jpg"),
                require("./../assets/Superform/DSCF1740.JPG.jpg"),
                require("./../assets/Superform/DSCF1741.JPG.jpg"),
                require("./../assets/Superform/DSCF1742.JPG.jpg"),
            ]}/>
            <h2>Process</h2>
            <p>I wanted to make a chair that promotes social interaction and also allow social isolation when the user chooses to.</p>
            <Gallery images={[
                require("./../assets/Superform/IMAG0729.jpg"),
                require("./../assets/Superform/IMAG0730.jpg"),
                require("./../assets/Superform/IMAG0731.jpg"),
                require("./../assets/Superform/IMAG0732.jpg"),
                require("./../assets/Superform/IMAG0735.jpg"),
                require("./../assets/Superform/IMAG0736.jpg"),
                require("./../assets/Superform/IMAG0746.jpg"),
                require("./../assets/Superform/IMAG0747.jpg"),
                require("./../assets/Superform/IMAG0752.jpg"),
                require("./../assets/Superform/IMAG0754.jpg"),
                require("./../assets/Superform/IMAG0756.jpg"),                
            ]}/>
            <p>Folding chairs became a big theme and I wanted to explore folding and hinges.</p>
            <Gallery images={[
                require("./../assets/Superform/IMAG0757.jpg"),
                require("./../assets/Superform/IMAG0759.jpg"),
                require("./../assets/Superform/IMAG0760.jpg"),
                require("./../assets/Superform/IMAG0766.jpg"),
                require("./../assets/Superform/IMAG0769.jpg"),
                require("./../assets/Superform/IMAG0773.jpg"),
                require("./../assets/Superform/IMAG0777.jpg"),  
            ]}/>
            <p>I settled with an idea and prototyped it in 3mm plywood.</p>
            <Gallery images={[
                require("./../assets/Superform/IMAG0789.jpg"),
                require("./../assets/Superform/IMAG0790.jpg"),
                require("./../assets/Superform/IMAG0791.jpg"),
                require("./../assets/Superform/IMAG0842.jpg"),   
            ]}/>
            <p>The wood started to bend if you sat on it in a certain way, so I decided to go back to using cardboard. This is because I could add more thickness to the panels without it being too heavy.</p>
            <img 
                src = {require("./../assets/Superform/IMAG0842.jpg")}
                alt = "Bottom spiral of chair"
            />
        </>
    )
}

export default Superform
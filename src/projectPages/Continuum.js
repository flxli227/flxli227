import React from 'react';
import Gallery from './../components/gallery/Gallery'
// import YouTube from '../components/youTube/YouTube';

class Continuum extends React.Component {
    render(){
        return (
            <>
                <h2>What is it?</h2>
                <p>Continuum is an evolving interactive exhibition that was first displayed at this year's Imperial Festival and went on to be selected to exhibit at the Victoria & Albert Museum's Friday Late in July 2017.</p>
                <Gallery 
                    images={[
                        require("./../assets/Continuum/_DSC0020.jpg"),
                        require("./../assets/Continuum/_DSC0021.jpg"),
                        require("./../assets/Continuum/_DSC0028.jpg"),
                        require("./../assets/Continuum/Crowd.jpg"),
                        require("./../assets/Continuum/Continuum-Logo-Final-Web-1000px.png"),
                    ]}
                />
            </>
        )
    }
}

export default Continuum
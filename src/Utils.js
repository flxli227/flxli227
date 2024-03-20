//Make removes space from beginning and end lowercase and replace all " " with "-" in path
export const sluggify = (string) => {
    return (string.trim().replaceAll(" ","-").toLowerCase())
}

//Projects data
export const projectsData= [
    {
        id: 12,
        name: "Customizer",
        imageURL: require("./assets/Customizer/HeroImage.jpg"),
        imageAlt: "An image of a character created from the MyMiniFactory Customizer",
        body: "A tool where a 3D designer can make money by selling customisable 3D designs",
        titleVideoOverride:{
            localFileLocation: require("./assets/Customizer/Customizer.mp4"),
        }
    },
    {
        id: 11,
        name: "Awesome Per Second",
        imageURL: require("./assets/Awesome per Second/AwesomePerSecond.jpg"),
        imageAlt: "An image of the screenshot of Awsome per Second the game",
        titleVideoOverride: {
            localFileLocation: require("./assets/Awesome per Second/01 - 8 Second.mp4"),
        },
        body: "An Extra Credits Game Jam Entry about my experence of making my first game"
    },
    {
        id: 10,
        name: "Coinbox",
        imageURL: require("./assets/Coinbox/Hero Shot.png"),
        imageAlt: "A photo of Felix with his coinbox",
        titleVideoOverride: {
            localFileLocation: require("./assets/Coinbox/02 - Final Montage.mp4"),
        },
        body: "A physical Super Mario Bros Coinbox replica submitted as a part of Level-up competition hosted by the Imperial Hackspace"
    },
    {
        id: 9,
        name: "Notbook",
        imageURL: require("./assets/Not-Book/New Hero Shot Photoshop Replacement-02-01.jpg"),
        imageAlt: "A screenshot of Not-Book, the interactive learning platform",
        body: "An interactive learning platform where you learn by playing"
    },
    {
        id: 8,
        name: "Firefly",
        imageURL: require("./assets/Firefly/Awesome Photo.png"),
        imageAlt: "",
        body: "A dynamic crowd control system for evacuation of outdoor venues"
    },
    {
        id: 7,
        name: "Surreal Dream",
        imageURL:require("./assets/Escape Room/Hat Mirror.png"),
        imageAlt: "A photo of a player solving the hat puzzle",
        titleVideoOverride: {
            localFileLocation: require("./assets/Escape Room/Promo Video.mp4"), //<- TODO (Low priority) Change for YouTube when you have the version with audio
        },
        body: "A surreal themed pop-up escape room designed and set up as a part of the Imperial College Advanced Hackspace"
    },
    {
        id: 6,
        name: "Continuum",
        imageURL:require("./assets/Continuum/DSC0020.jpg"),
        imageAlt: "A picture of some of the Continuum machinery",
        titleVideoOverride: {
            youTubeId:"yjkR97q-ws8",
        },
        body: "A V&A Late about ideation"
    },
    {
        id: 5,
        name: "New Spawn Baby",
        imageURL:require("./assets/Newspawn Baby/Movie Thumbnail.png"),
        imageAlt: "A screenshot of the shot film New Spawn Baby",
        titleVideoOverride: {
            youTubeId:"3DOJrhLx4xs",
        },
        body: "A speculative short film about a dystopian government and declining birth rates"
    },
    {
        id: 4,
        name: "Timie",
        imageURL:require("./assets/Timie/Timie EXP Pictures-05 2-05-05.png"),
        imageAlt: "A photo of the prototype smart watch and app",
        body: "Your Personal Time Companion"
    },
    {
        id: 3,
        name: "Barbour Gin Infuser",
        imageURL:require("./assets/Gin Infuser/Nice Photos-01.png"),
        imageAlt: "A photo of Barbour Gin Infusers, for the I'll Take 9 project",
        body: "Manufacturing of 9 Barbour Inspired Gin Infusers"
    },
    {
        id: 2,
        name: "Superform",
        imageURL:require("./assets/Superform/DSCF1740.JPG.jpg"),
        imageAlt: "A photo of the cardboard foldable chair made in the Superform module",
        titleVideoOverride: {
            localFileLocation: require("./assets/Superform/Superform Cut.mp4")
        },
        body: "A cardboard foldable chair"
    },
    {
        id: 1,
        name: "Gorilla Suit",
        imageURL:require("./assets/Elastic Octopus/Jonathan like a Mech.png"),
        imageAlt: "A photo of a person trying out the Powersiut in the IDE studio of RCA",
        titleVideoOverride: {
            youTubeId:"or4l3PVNhJ8",
        },
        body: "A suit to unlock your inner beast, an expermental design process"
    },
    {
        id: 0,
        name: "ME2 Scooter Project",
        imageURL:require("./assets/Scooter/IMG-20150203-WA0006.jpg"),
        imageAlt: "A photo of the inner workings of our ME2 electric scooter as a part of Mechanical Engineering at Imperial College",
        body: "Transformation of a push scooter to an electric scooter"
    },
];
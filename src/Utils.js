//Make removes space from beginning and end lowercase and replace all " " with "-" in path
export const sluggify = (string) => {
    return (string.trim().replaceAll(" ","-").toLowerCase())
}

export const tags=[
    {
        id:0,
        name: "Web Development",
    },
    {
        id:1,
        name: "Project Management",
    },
    {
        id:2,
        name: "UX/UI",
    },
    {
        id:3,
        name: "Games",
    },
    {
        id:4,
        name: "Mechanical Engineering",
    },
    {
        id:5,
        name: "Manufacturing",
    },
    {
        id:6,
        name: "Product Design",
    },
    {
        id:7,
        name: "Art",
    },
    {
        id:8,
        name: "Film",
    },
    {
        id:9,
        name: "Experimentation",
    },
    {
        id:10,
        name: "Coding",
    },
    {
        id:11,
        name: "Artistic Fabrication",
    }
]

//Projects data
export const projectsData= [
    {
        id: 14,
        name: "Pool 2",
        imageURL: require("./assets/Pool2/Heroshot-min.jpg"),
        imageAlt: "A screenshot of the Pool 2 game",
        year: "2023",
        tags: ["Games", "Coding"],
        body: "A game of pool, but each player has their own cue ball and shots happen in real time",
        titleVideoOverride:{
            youTubeId: "76at1mBOylI",
        }
    },
    {
        id: 13,
        name: "FronTiers",
        imageURL: require("./assets/FronTiers/FronTiersHero-min.jpg"),
        imageAlt: "The FronTiers Logo overlayed on a FronTiers page",
        year: "2020",
        tags: ["UX/UI", "Project Management", "Web Development", "Coding"],
        body: "A product launch tool for 3D designers",
    },
    {
        id: 12,
        name: "Customizer",
        imageURL: require("./assets/Customizer/HeroImage.jpg"),
        imageAlt: "A character created from the MyMiniFactory Customizer",
        year: "2019",
        tags: ["UX/UI", "Project Management", "Web Development", "Coding"],
        body: "A tool where a 3D designer can make money by selling customisable 3D designs",
        titleVideoOverride:{
            localFileLocation: require("./assets/Customizer/Customizer.mp4"),
        }
    },
    {
        id: 11,
        name: "Awesome Per Second",
        imageURL: require("./assets/Awesome per Second/AwesomePerSecond.jpg"),
        imageAlt: "A screenshot of Awsome per Second the game",
        year: 2018,
        tags: ["Games", "Coding"],
        titleVideoOverride: {
            localFileLocation: require("./assets/Awesome per Second/01 - 8 Second.mp4"),
        },
        body: "An Extra Credits Game Jam Entry about my experence of making my first game"
    },
    {
        id: 10,
        name: "Coinbox",
        imageURL: require("./assets/Coinbox/Hero Shot-min.jpg"),
        imageAlt: "Felix with his coinbox",
        year: 2018,
        tags: ["Artistic Fabrication", "Manufacturing", "Mechanical Engineering"],
        titleVideoOverride: {
            localFileLocation: require("./assets/Coinbox/02 - Final Montage.mp4"),
        },
        body: "A physical Super Mario Bros Coinbox replica submitted as a part of Level-up competition hosted by the Imperial Hackspace"
    },
    {
        id: 9,
        name: "Notbook",
        imageURL: require("./assets/Not-Book/New Hero Shot Photoshop Replacement-02-01-resized-min.jpg"),
        imageAlt: "A screenshot of Not-Book, the interactive learning platform",
        year: 2018,
        tags: ["UX/UI", "Games", "Product Design", "Coding"],
        body: "An interactive learning platform where you learn by playing"
    },
    {
        id: 8,
        name: "Firefly",
        imageURL: require("./assets/Firefly/Awesome Photo-resized-min.jpg"),
        imageAlt: "Firefly directing crowds by projecting arrows",
        year: 2017,
        tags: ["Product Design"],
        body: "A dynamic crowd control system for evacuation of outdoor venues"
    },
    {
        id: 7,
        name: "Surreal Dream",
        imageURL:require("./assets/Escape Room/Hat Mirror-min.jpg"),
        imageAlt: "A player solving the hat puzzle",
        year: 2017,
        tags: ["Games"],
        titleVideoOverride: {
            localFileLocation: require("./assets/Escape Room/Promo Video.mp4"), //<- TODO (Low priority) Change for YouTube when you have the version with audio
        },
        body: "A surreal themed pop-up escape room designed and set up as a part of the Imperial College Advanced Hackspace"
    },
    {
        id: 6,
        name: "Continuum",
        imageURL:require("./assets/Continuum/DSC0020-resized-min.jpg"),
        imageAlt: "Continuum machinery",
        year: 2017,
        tags: ["Art", "Artistic Fabrication"],
        titleVideoOverride: {
            youTubeId:"yjkR97q-ws8",
        },
        body: "A V&A Late about ideation"
    },
    {
        id: 5,
        name: "New Spawn Baby",
        imageURL:require("./assets/Newspawn Baby/Movie Thumbnail-min.jpg"),
        imageAlt: "A screenshot of the shot film New Spawn Baby",
        year: 2017,
        tags: ["Film"],
        titleVideoOverride: {
            youTubeId:"3DOJrhLx4xs",
        },
        body: "A speculative short film about a dystopian government and declining birth rates"
    },
    {
        id: 4,
        name: "Timie",
        imageURL:require("./assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg"),
        imageAlt: "A prototype smart watch and app to help you be on time",
        year: 2017,
        tags: ["Product Design", "Coding"],
        body: "Your Personal Time Companion"
    },
    {
        id: 3,
        name: "Barbour Gin Infuser",
        imageURL:require("./assets/Gin Infuser/Nice Photos-01-resized-min.jpg"),
        imageAlt: "The 9 Barbour Gin Infusers, for the I'll Take 9 project",
        year: 2017,
        tags: ["Manufacturing"],
        body: "Manufacturing of 9 Barbour Inspired Gin Infusers"
    },
    {
        id: 2,
        name: "Superform",
        imageURL:require("./assets/Superform/DSCF1740-resized-min.jpg"),
        imageAlt: "A cardboard foldable chair made in the Superform module",
        year: 2017,
        tags: ["Art", "Artistic Fabrication"],
        titleVideoOverride: {
            localFileLocation: require("./assets/Superform/Superform Cut.mp4")
        },
        body: "A cardboard foldable chair"
    },
    {
        id: 1,
        name: "Gorilla Suit",
        imageURL:require("./assets/Elastic Octopus/Jonathan like a Mech.png"),
        imageAlt: "A person trying out the Powersiut in the IDE studio of RCA",
        year: 2016,
        tags: ["Experimentation"],
        titleVideoOverride: {
            youTubeId:"or4l3PVNhJ8",
        },
        body: "A suit to unlock your inner beast, an expermental design process"
    },
    {
        id: 0,
        name: "ME2 Scooter Project",
        imageURL:require("./assets/Scooter/IMG-20150203-WA0006-min.jpg"),
        imageAlt: "The inner workings of our ME2 electric scooter as a part of Mechanical Engineering at Imperial College",
        year: 2015,
        tags: ["Manufacturing", "Mechanical Engineering"],
        body: "Transformation of a push scooter to an electric scooter"
    },
];
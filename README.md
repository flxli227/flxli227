# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

___________________________________________________________________

## Project Documentation

### CSS

Try to have all CSS values as variables and they are in the file **index.css**

### Structure

- Index
    - App
        - Top bar (route)
            - Content*
                - Project List
                    - ...
            - Content*
                - markdown Show
                    - ...
            - No page

* Content __(This component is in charge of all the padding and stuff for all content. The type of page should be decided with the props.)__

### Adding new pages in the Top Bar

Pages are generated in the App.js file in an object which is read by:
    - Top Bar (to generate the correct links in the top bar)
    - Content (to display the correct page template)

### Meta Title and description 
 Meta Title and description are stored in Content

### Adding new projects in the website

Projects pages are generated from the "projectsData" object in Utils.js and then the markdown of an equal name will be read

1. Write the Markdown content for the page in a new file matching the name of the project in src/markdown
2. Add the import and an entry in the "markdown" array in markdownExport.js
3. Add a entry in the array "projectsData" in Utils.js

#### projectsData

```
name: string name of project,
imageURL: url of image which shows on project card and main title image,
imageAlt: alt for imageURL,
titleVideoOverride: { //optional
    youTubeId: id of YouTube Video,
    localFileLocation: **WIP**,
},
body: the description of the project in the project card
```

titleVideoOverride is optional, this will override the title image in the content page with a video

### Content Pages

Please add all CSS to do with content pages inside JavascriptPageShow.css because I wanted the styles to be consistent for all Javascript Content pages

This includes:

- YouTube Video Containers
- Gallery

#### Adding YouTube Video on Javascript Content pages

Please use the YouTube component and enter the video id as a prop called id for example: 
`<YouTube id="g3jCAyPai2Y"/>`

#### Adding Non YouTube Video on Javascript Content pages

Please use the `Video` component as an optimised Gif.  
For example:
`<Video path={require("./../assets/Not-Book/Final Montage.mp4")}/>`
Note the relative path is from the Javascript Content page.

#### Adding a Gallery with images

Please use the Gallery component and enter the images via an array as a prop called images for example 
```
<Gallery 
    images={[
        require("./../assets/Continuum/_DSC0020.jpg"),
        require("./../assets/Continuum/_DSC0021.jpg"),
        require("./../assets/Continuum/_DSC0028.jpg"),
        require("./../assets/Continuum/Crowd.jpg"),
        require("./../assets/Continuum/Continuum-Logo-Final-Web-1000px.png"),
    ]}
/>
```

#### Gallery Documentation

[https://www.npmjs.com/package/react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
[https://www.npmjs.com/package/react-image-video-gallery](https://www.npmjs.com/package/react-image-video-gallery)

#### Adding MultiColumn Content

Please use the MultiColumn component and enter the images, title and text via an array of objects as a prop called columns for example 
```
<MultiColumn 
    columns = {[
        {
            image: {
                url: require("./../assets/Software Logo/Unity.png"),
                alt: "Unity Logo",
                filters: ["invert(1)"]
            },
            title: "Unity Engine, C# Scripting",
            body: "I used Unity to complete my project"
        },
        {
            image: {
                url: require("./../assets/Software Logo/Illustrator.png"),
                alt: "Adobe Illustrator Logo",
                filters: ["invert(1)"]
            },
            title: "Adobe Illustrator",
            body: "I used Illustrator to complete my project"
        },
    ]}
/>
```

### Adding functions that will be used in multiple components

Please add them in the file Utils.js
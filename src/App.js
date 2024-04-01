import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from './components/topBar/TopBar';
import ContentAndFooter from './components/content/ContentAndFooter';
import NoPage from './components/noPage/NoPage';
import {sluggify, projectsData} from './Utils.js';

function App() {
  // Generate route for each project
    let projectPages = projectsData.map((project) =>
      <Route 
        key={project.id} 
        path={sluggify(project.name)} //Make lowercase and replace all " " with "-" in path
        element={
          <ContentAndFooter 
            pageContent = "JavascriptPage"
            name = {project.name}
            imageURL = {project.imageURL}
            imageAlt = {project.imageAlt}
            titleVideoOverride = {project.titleVideoOverride}
          />
        } 
      />
    )

  // Page Data for generating pages that are in the navigation bar
    let menuItemsData= [
      {
        name: "Projects",
        isActive: false,
      },
      {
        name: "About",
        isActive: false,
      },
    ];

    // Generate the pages from the menuItemsData
    let topBarPages = menuItemsData.map((menuItem) => 
    <Route 
      key={menuItem.name} 
      path={menuItem.name}
      element={
        <ContentAndFooter 
          pageContent = {menuItem.name}
          projectsData = {menuItem.name === "Projects" ? projectsData : null} //<- If the page is Projects pass the projectsData prop through
        />
      } 
    />
    )

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <TopBar 
              menuItemsData = {menuItemsData}
            />
          }
        >
          {topBarPages} {/* Projects and About */}
          <Route
            path="project" 
          >
            {projectPages}
            <Route path="" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route //GoogleApplication
            path="Hey-Google" 
            element={
              <ContentAndFooter 
                pageContent = "GoogleApplication"
              />
            }
          ></Route>
          <Route
              path=""
              element={ <Navigate to="/Projects"/> }
          />
        </Route>
        <Route path="*" element={<Navigate to="/#/Projects"/>} /> *
      </Routes>
    </HashRouter>
  );
}

export default App;

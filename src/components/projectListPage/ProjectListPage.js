import { useState } from "react";
import ProjectList from './../projectList/ProjectList';
import {tags} from './../../Utils.js';
import './ProjectListPage.css';
import { useLocation } from 'react-router-dom';
import {sluggify} from './../../Utils';


function ProjectListPage(props) {
    
    // On page load read the URL query string and select the correct filter

    // Read query string in URL for "filter"
    let urlObject = useLocation();
    console.log(urlObject);
    let searchParams = new URLSearchParams(urlObject.search);
    let query = searchParams.get("filter");

    // Set up this variable for use later
    let tagMatched = "All";

    //If there is a query String
    if(query){
        // Sluggify the query string
        let querySluggified = sluggify(query);
        
        // // Sluggify all tags
        let tagSluggifiedArray = tags.map((tag)=>{
            return sluggify(tag.name)
        })
        
        // // See if sluggified query string matches any of the sluggified tags
        // // If yes return the index, if not return -1
        let indexOfTagMatch = tagSluggifiedArray.indexOf(querySluggified);
        
        if(indexOfTagMatch >= 0){
            tagMatched = tags[indexOfTagMatch].name;
        }
    }
        

    // Setting up state
    const  [selectedOption, setSelectedOption] =  useState(tagMatched);
    // const  [selectedOption, setSelectedOption] =  useState("All");

    const  handleDropdownChange = (event) => {
		applyFilterAndUpdateUrl(event.target.value);
	};

    const  handleButtonClick = (event) => {
        applyFilterAndUpdateUrl(event.target.value);
    };

    const applyFilterAndUpdateUrl= (filter) =>{
        let urlString = "/#" + urlObject.pathname + "?filter=" + sluggify(filter);
        window.history.replaceState({}, "", urlString);
        setSelectedOption(filter);
    };

    // Render Button Filter (for desktop)
    let tagButtons =  tags.map((tag) =>{

        let buttonClassName = "filterButton";
        if(tag.name === selectedOption){
            buttonClassName = buttonClassName + " selected"
        }
        return(
            <>
                <button 
                    className={buttonClassName}
                    type="button"
                    value={tag.name}
                    onClick={handleButtonClick}
                    >
                    {tag.name}
                </button>
            </>
        )
    })

    // Render Dropdown options (for mobile)
    let tagDropdown = tags.map((tag) =>
        <>
            <option 
                value={tag.name}
                key={tag.id}
            >
                {tag.name}
            </option>
        </>
    )

    //Filter project
    let filtedProjects = [];
    if(selectedOption === "All"){
        filtedProjects = props.projectsData;
    }else{
        props.projectsData.forEach((project) => {
            if(project.tags.includes(selectedOption)){
                filtedProjects.push(project);
            }
        });
    }


    window.scrollTo(0, 0);
    return (
        <>
            <h1 className="pageTitle">Projects</h1>
            <div className="filtersDiv"> 
                <div className="hideWhenMobileSize">
                    <div className="tagbuttonFlex">
                        <button 
                            className={selectedOption === "All" ? "filterButton selected" : "filterButton"}
                            type="button"
                            value="All"
                            onClick={handleButtonClick}
                            >
                            All
                        </button>
                        {tagButtons}
                    </div>
                </div>
                <div className="hideWhenDesktopViewportSize">
                    <div className="dropdownFilterFlex">
                        <p>Show</p>
                        <select 
                            className="dropdownFilter"
                            value={selectedOption} 
                            onChange={handleDropdownChange}
                        >
                            <option value="All" key={-1}>All</option>
                            {tagDropdown}
                        </select>
                        <p>projects</p>
                    </div>
                </div>
            </div>
            <ProjectList
                projectsData = {filtedProjects}
            />
        </>
    );
}

export default ProjectListPage;

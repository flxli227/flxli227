import { useState } from "react";
import ProjectList from './../projectList/ProjectList';
import {tags} from './../../Utils.js';
import './ProjectListPage.css';


function ProjectListPage(props) {
    const  [selectedOption, setSelectedOption] =  useState('All');

    const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

    const  handleButtonClick = (event) => {
        setSelectedOption(event.target.value);
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

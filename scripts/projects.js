
var PROJECTS_LOCATION

function loadProjects() {

    return new Promise((resolve, reject) => {
        // New Query
        var request = new XMLHttpRequest();
        request.open("GET", PROJECTS_LOCATION);
        request.responseType = 'json';

        var data;
        request.send();
        request.onload = function() {
        if (request.status === 200) {
            data = request.response;
            console.log("Loaded projects");
            
            resolve(data.projects);
            
        }}
    });
}

function reloadProjects() {

    // Create a list of filters 
    var filters = [];
    const activeFilterElements = document.getElementsByClassName("filter-active");

    for (var i = 0; i < activeFilterElements.length; i++) {
        filters.push(activeFilterElements[i].innerText);
    }

    

    

}

async function filterProjects() {

    // Grab the list of tags 
    const activeTagElements = document.getElementsByClassName('filter-active');
    var tags = [];

    for (var i = 0; i < activeTagElements.length; i++) {
        tags.push(activeTagElements[i].innerText);
    }

    console.log(tags);


    // Disable display for projects not matching current tags

    const projects = document.getElementsByClassName("project");

    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = 'flex';
    }

    // Filtering rules: 
    // Every project shown needs to have all enabled criteria

    for (var i = 0; i < projects.length; i++) {
        for (var j = 0; j < tags.length; j++) {
            console.log(projects[i].getAttribute("tags"));
            if (projects[i].getAttribute("tags").indexOf(tags[j]) === -1) {
                projects[i].style.display = 'none';
            }
        }
    }
}

async function showProjects(projects) {

    
    
    const projectsExpoElement = document.getElementById("expo");
    var newProjectExpo;
    var newProjectTitle;
    var newProjectDescription;
    var newProjectImage;

    var tags = [];

    for (var i = 0; i < projects.length; i++) {
        newProjectExpo = document.createElement("a");
        newProjectExpo.classList.add("project");

        newProjectImage = document.createElement("div");
        newProjectImage.classList.add("project-image");
        newProjectImage.style.backgroundImage = "url(\"" + projects[i].image + "\")";
        newProjectExpo.appendChild(newProjectImage);

        newProjectTitle = document.createElement("h1");
        newProjectTitle.classList.add("project-title");
        newProjectTitle.innerHTML = projects[i].title;
        newProjectExpo.appendChild(newProjectTitle);

        newProjectDescription = document.createElement("p");
        newProjectDescription.classList.add("project-description");
        newProjectDescription.innerHTML = projects[i].short_description;
        newProjectExpo.appendChild(newProjectDescription);

        // Add filter tag directly inside HTML code for the future
        newProjectExpo.setAttribute("tags", projects[i].tags);

        newProjectExpo.addEventListener('click', (event) => {
            loadProject(event.currentTarget.children[1].innerHTML);
            const projectPage = document.getElementById('project-page');
            projectPage.style.display = 'flex';
            projectPage.classList.remove('hidden');
            
        });

        projectsExpoElement.appendChild(newProjectExpo);

        // Add tags
        for (var j = 0; j < projects[i].tags.length; j++) {
            if (tags.indexOf(projects[i].tags[j]) === -1) {
                tags.push(projects[i].tags[j]);
            }
        }
    }

    const tagElements = document.getElementById("filters");
    var tagElement;

    for (var i = 0 ; i < tags.length ; i++) {

        tagElement = document.createElement('div');
        tagElement.classList.add('filter');
        tagElement.innerText = tags[i];
        tagElement.addEventListener('click', (event) => {
            event.currentTarget.classList.toggle('filter-active');
            filterProjects();
        });

        tagElements.appendChild(tagElement);

    }

    /* 
    // Add tags to the list
    var tagElement;
    var filterListElement = document.getElementById("filters");
    for (var i = 0; i < tags.length; i++) {
        tagElement = document.createElement("div");
        tagElement.classList.add("filter");
        tagElement.innerText = tags[i];
        tagElement.addEventListener("click", () => {
            console.log(tags[i]);
        });

        filterListElement.appendChild(tagElement);
    }

    */

}

function loadProject(title) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);


    // Get projects
    // New Query
    var request = new XMLHttpRequest();
    request.open("GET", PROJECTS_LOCATION);
    request.responseType = 'json';

    var data;
    request.send();
    request.onload = function() {
        if (request.status === 200) {
            data = request.response;
            showProject(data.projects, title);
        }
    };

}

async function closeProjectPage() {

    const projectPage = document.getElementById('project-page');
    projectPage.style.display = 'none';
    
    

}

function showProject(projects, projectName) {

    var project;
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].title == projectName) {
            project = projects[i];
        }
    }

    // Change project image
    var projectImage = document.getElementById("project-image");
    projectImage.setAttribute("src", project.image);

    var projectTitle = document.getElementById("project-title");
    projectTitle.innerText = project.title;

    // Add project filters

    const tagElements = document.getElementById("project-view-filters");

    tagElements.innerHTML = '';

    var tagElement;

    for (var i = 0 ; i < project.tags.length ; i++) {

        tagElement = document.createElement('div');
        tagElement.classList.add('project-view-filter');
        tagElement.innerText = project.tags[i];

        tagElements.appendChild(tagElement);

    }

    // Add GitHub & demo if existing
    var projectLinks = document.getElementsByClassName("project-links")[0];
    projectLinks.innerHTML = '';

    if (project.github) {

        var githubLink = document.createElement('a');
        githubLink.setAttribute("href", project.github);
        githubLink.setAttribute("target", "_blank");
        githubLink.innerText = "View project code";

        projectLinks.appendChild(githubLink);

    }

    if (project.demo) {
        if (project.github) {
            projectLinks.innerHTML += " | ";
        }

        var demoLink = document.createElement('a');
        demoLink.setAttribute("href", project.demo);
        demoLink.setAttribute("target", "_blank");
        demoLink.innerText = "Play project";

        projectLinks.appendChild(demoLink);
    }

    // Add textual content

    var projectIntro = document.getElementById("project-intro");
    projectIntro.innerText = project.intro;

    var projectChallenge = document.getElementById("project-challenge"); 
    projectChallenge.innerText = project.challenge; 

    var projectTech = document.getElementById("project-tech"); 
    projectTech.innerText = project.tech; 

    var projectLessons = document.getElementById("project-teachings");
    projectLessons.innerText = project.lessons;

    
    // var projectDescription = document.getElementById("project-description");
    // projectDescription.innerText = project.long_description;


}


function loadProjects() {

    // New Query
    var request = new XMLHttpRequest();
    request.open("GET", "/assets/projects.json");
    request.responseType = 'json';

    var data;
    request.send();
    request.onload = function() {
        if (request.status === 200) {
            data = request.response;
            showProjects(data.projects);
        }
    };
}

async function addFilter(tag) {
    console.log(tag);
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
        newProjectExpo.href = "project.html?projectTitle=" + projects[i].title;

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

        projectsExpoElement.appendChild(newProjectExpo);

        // Add tags
        for (var j = 0; j < projects[i].tags.length; j++) {
            if (tags.indexOf(projects[i].tags[j]) === -1) {
                tags.push(projects[i].tags[j]);
            }
        }
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

function loadProject() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var projectName = urlParams.get("projectTitle");

    // Get projects
    // New Query
    var request = new XMLHttpRequest();
    request.open("GET", "/assets/projects.json");
    request.responseType = 'json';

    var data;
    request.send();
    request.onload = function() {
        if (request.status === 200) {
            data = request.response;
            showProject(data.projects, projectName);
        }
    };

}

function showProject(projects, projectName) {

    // Change page title
    document.title = projectName + " | Ethan R.";

    var project;
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].title == projectName) {
            project = projects[i];
        }
    }

    console.log(project);

    // Change project image
    var projectImage = document.getElementById("project-image");
    projectImage.style.backgroundImage = "url(\"" + project.image + "\")";

    var projectTitle = document.getElementById("project-title");
    projectTitle.innerText = project.title;

    var projectDescription = document.getElementById("project-description");
    projectDescription.innerText = project.long_description;


}
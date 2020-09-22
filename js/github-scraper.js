const API = "https://api.github.com/users/MaxMdos/repos";
const projects = document.getElementById("past-projects");

function getRepos(){
    fetch(API)
        .then(response => response.json())
        .then(data => {
            let repos = []
            data.map(item => {
                repos.push({title: item.name, description: item.description, link: item.html_url})
            })
            repos.forEach(element => {
                if (element.description == null) {
                    element.description = ""
                }
                let box = document.createElement("div");
                box.className = "project-box"
                box.innerHTML = `<h2>${element.title}</h2>
                                 <p>${element.description}</p>
                                 <a href="${element.link}" target="_blank">Link</a>`;
                projects.appendChild(box);
            })
        }).catch(error => {
                console.log(error);
                let errorBox = document.createElement("div")
                errorBox.className = "error-box"
                errorBox.innerHTML = error;
        })
}

// Example project data — edit this file to update projects
const projects = [
    {
        image: "https://via.placeholder.com/600x350?text=Project+1",
        title: "Portfolio Website",
        goal: "Create a modern, responsive personal portfolio site.",
        achievement: "Launched portfolio with high performance and accessibility scores.",
        skills: ["HTML", "CSS", "JavaScript", "UX/UI"]
    },
    {
        image: "https://via.placeholder.com/600x350?text=Project+2",
        title: "Task Manager App",
        goal: "Develop a user-friendly web app for task tracking.",
        achievement: "Integrated real-time syncing and intuitive drag-and-drop.",
        skills: ["React", "CSS", "Firebase"]
    },
    // Add more project objects here!
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.tabIndex = 0; // for keyboard accessibility

    card.innerHTML = `
        <img class="card-img" src="${project.image}" alt="Screenshot of ${project.title}">
        <div class="card-info">
            <span class="card-title">${project.title}</span>
        </div>
        <div class="card-details">
            <div class="card-desc-block">
                <span class="card-label">Goal:</span>
                <p>${project.goal}</p>
                <span class="card-label">Achievements:</span>
                <p>${project.achievement}</p>
            </div>
            <div class="card-skills">
                ${project.skills.map(skill => `<button class="card-skill-btn">${skill}</button>`).join('')}
            </div>
        </div>
    `;
    projectsContainer.appendChild(card);
});
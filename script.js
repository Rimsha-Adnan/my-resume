// // Function to toggle the skills section visibility
var toggleSkillsVisibility = function () {
    var skillsSection = document.getElementById('toggleing');
    var toggleButton = document.getElementById('toggle-skills-button');
    if (skillsSection && toggleButton) {
        // Toggle visibility
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.innerText = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.innerText = 'Show Skills';
        }
    }
};
// Add event listener to the toggle button
var toggleSkillsButton = document.getElementById('toggle-skills-button');
if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
}
// Populate projects dynamically
var projects = [
    { title: 'Amazon Clone', description: 'An Amazon website clone with HTML, CSS' },
    { title: 'Resume Builder', description: 'A dynamic resume builder using TypeScript and HTML' },
    { title: 'Portfolio Website', description: 'A portfolio website by using Next.js' },
    { title: 'Word Counter', description: 'A word counter web application by using React' },
    { title: 'Course Website', description: 'A course web application using also Next.js' }
];
var projectList = document.getElementById('project-list');
projects.forEach(function (project) {
    var listItem = document.createElement('li');
    listItem.innerHTML = "<strong>".concat(project.title, ":</strong> ").concat(project.description);
    projectList.appendChild(listItem);
    console.log(projectList);
});

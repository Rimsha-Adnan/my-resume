
// // Function to toggle the skills section visibility
const toggleSkillsVisibility = () => {
    const skillsSection = document.getElementById('toggleing');
    const toggleButton = document.getElementById('toggle-skills-button');
   

    if (skillsSection && toggleButton) {
      // Toggle visibility
      if (skillsSection.style.display === 'none' || skillsSection.style.display === ''){
        skillsSection.style.display = 'block';
        toggleButton.innerText = 'Hide Skills';
      } else {
        skillsSection.style.display = 'none';
        toggleButton.innerText = 'Show Skills';
      }
    }
  };
  
  // Add event listener to the toggle button
  const toggleSkillsButton = document.getElementById('toggle-skills-button');
  if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
  }
  
  
// Populate projects dynamically
const projects = [
  { title: 'Amazon Clone', description: 'An Amazon website clone with HTML, CSS' },
  { title: 'Resume Builder', description: 'A dynamic resume builder using TypeScript and HTML' },
  {title: 'Portfolio Website', description: 'A portfolio website by using Next.js'},
  {title: 'Word Counter', description: 'A word counter web application by using React'},
  {title: 'Course Website', description: 'A course web application using also Next.js'}
];

const projectList = document.getElementById('project-list') as HTMLUListElement;
projects.forEach((project) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
  projectList.appendChild(listItem);
  console.log(projectList);
});

// Function to toggle the skills section visibility
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

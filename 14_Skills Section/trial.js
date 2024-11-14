// Function to display the selected skill category
function showSkills(category) {
    // Select all skill elements and hide them
    const allSkills = document.querySelectorAll('.skill');
    allSkills.forEach(skill => skill.style.display = 'none');

    // Select only the skills with the chosen category class and display them
    const selectedSkills = document.querySelectorAll(`.${category}`);
    selectedSkills.forEach(skill => skill.style.display = 'flex');
}

// Show 'frontend' skills by default on page load
window.onload = () => showSkills('frontend');

function filterProjects(category) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    document.querySelector(`.filter-bar button[onclick="filterProjects('${category}')"]`).classList.add('active');

    // Get all project cards
    const projects = document.querySelectorAll('.project-card');
    // Loop through the projects and display based on category
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

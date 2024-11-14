function showProject(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    // Update active button style
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="showProject('${category}')"]`).classList.add('active');
}

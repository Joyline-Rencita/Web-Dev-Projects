const experienceBtn = document.getElementById('experience-btn');
const educationBtn = document.getElementById('education-btn');
const experienceContent = document.getElementById('experience');
const educationContent = document.getElementById('education');

experienceBtn.addEventListener('click', () => {
  experienceBtn.classList.add('active');
  educationBtn.classList.remove('active');
  experienceContent.classList.add('active');
  educationContent.classList.remove('active');
});

educationBtn.addEventListener('click', () => {
  educationBtn.classList.add('active');
  experienceBtn.classList.remove('active');
  educationContent.classList.add('active');
  experienceContent.classList.remove('active');
});

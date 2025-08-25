document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-item');
    const animateSkill = (skill) => {
        const circle = skill.querySelector('.progress');
        const percent = skill.dataset.percent;
        const percentText = skill.querySelector('.skill-percent');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        let count = 0;
        const timer = setInterval(() => {
            if (count >= percent) {
                clearInterval(timer);
            } else {
                count++;
                percentText.textContent = count + '%';
            }
        }, 15);
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                animateSkill(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    skills.forEach(skill => observer.observe(skill));
});





// Animate promo cards on scroll
document.addEventListener('DOMContentLoaded', function() {
  const promoSection = document.getElementById('promo-cards');
  const cards = promoSection.querySelectorAll('.category-featured, .category-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => observer.observe(card));
});



// Scroll-triggered section animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section:not(:first-child)');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
});






function sendMail() {
  var params = {
    name: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("title").value,
  };

  const serviceID = "service_kjbvx5e";
  const templateID = "template_bytqbde";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("fname").value = "";
        document.getElementById("lname").value="";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("title").value="";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
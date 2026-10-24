const form = document.getElementById("interest-form");
const results = document.getElementById("results");

const careerAreas = {
  technology: {
    title: "Technology & data",
    description: "Explore software development, data analysis, cybersecurity, IT support, or AI-related study. Compare the maths, computing, and project skills each path uses.",
    action: "Try a beginner coding activity or make a simple webpage."
  },
  people: {
    title: "People & society",
    description: "Explore teaching, psychology, social work, human resources, and public-service roles. Learn about the training and qualifications required in your region.",
    action: "Talk with a teacher or trusted adult about a role that interests you."
  },
  creative: {
    title: "Creative fields",
    description: "Explore graphic design, animation, writing, media, content creation, and communication. A portfolio or sample projects may be useful in some fields.",
    action: "Create one small project and ask someone for feedback."
  },
  science: {
    title: "Science & environment",
    description: "Explore scientific research, health-related fields, agriculture, environmental work, and sustainability. Check subject requirements before choosing a pathway.",
    action: "Choose a real-world question and research it using reliable sources."
  },
  business: {
    title: "Business & leadership",
    description: "Explore marketing, entrepreneurship, finance, operations, and project management. These paths can combine communication, analysis, and organisation.",
    action: "Plan a small school activity with a goal, budget, and task list."
  },
  practical: {
    title: "Practical & skilled work",
    description: "Explore technical services, engineering technology, manufacturing, agriculture, and skilled trades. Compare recognised training routes and safety requirements.",
    action: "Ask about a supervised, safe hands-on project or workshop."
  }
};

const strengthNotes = {
  analytical: "Your answer suggests you may enjoy tasks involving patterns, evidence, and problem-solving. Look for courses or activities where you can practise these skills.",
  supportive: "Your answer suggests you may enjoy explaining ideas and working with people. Try activities that involve listening, mentoring, teaching, or teamwork.",
  creative: "Your answer suggests you may enjoy generating and shaping ideas. Try a small creative project and keep examples of what you make.",
  organised: "Your answer suggests you may enjoy planning and coordinating work. Try organising a project and reflecting on what went well."
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = [...form.querySelectorAll('input[name="interest"]:checked')].map((input) => input.value);
  const strength = form.querySelector('input[name="strength"]:checked');

  if (selected.length === 0) {
    results.hidden = false;
    results.innerHTML = '<h3>Choose at least one interest</h3><p>Select one or more activities above, then try again.</p>';
    results.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const chosenAreas = selected.map((key) => careerAreas[key]);
  const areaHtml = chosenAreas.map((area) => `
    <article class="result-item">
      <h4>${area.title}</h4>
      <p>${area.description}</p>
      <div class="next-step"><strong>Small next step:</strong> ${area.action}</div>
    </article>
  `).join("");

  results.innerHTML = `
    <p class="eyebrow">YOUR EXPLORATION IDEAS</p>
    <h3>Here are some areas to investigate</h3>
    <p>These ideas are based on the interests you selected. They are not a ranking, aptitude score, or fixed prediction.</p>
    ${areaHtml}
    ${strength ? `<div class="next-step"><strong>Strength reflection:</strong> ${strengthNotes[strength.value]}</div>` : ""}
    <div class="next-step"><strong>Remember:</strong> Before making a subject or career decision, compare course requirements, costs, training options, and day-to-day work. Discuss your findings with a parent, teacher, or qualified career counsellor.</div>
    <button type="button" class="button primary full" id="restart-quiz" style="margin-top:18px">Change my answers ↻</button>
  `;
  results.hidden = false;
  document.getElementById("restart-quiz").addEventListener("click", () => {
    form.reset();
    results.hidden = true;
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

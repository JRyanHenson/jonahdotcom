// Football facts for the button
const footballFacts = [
  "A football field is 100 yards long — that's about 91 meters! 🏟️",
  "The Super Bowl is watched by over 100 million people every year! 📺",
  "A touchdown scores 6 points — plus you get a chance for 1 or 2 more! 🏈",
  "The NFL has 32 teams split into two conferences: NFC and AFC.",
  "The fastest NFL player ever ran 22.6 miles per hour! ⚡",
  "The most SuperBowl wins by a single player is Tom Brady with 7",
];

// Get elements
const btn = document.getElementById('football-btn');
const fact = document.getElementById('football-fact');

// Button click handler
btn.addEventListener('click', function () {
  // Pick a random fact
  const randomIndex = Math.floor(Math.random() * footballFacts.length);
  fact.textContent = footballFacts[randomIndex];
  fact.classList.remove('hidden');

  // Bounce the button
  btn.textContent = 'Show another fact!';
});

// script.js
const birthday = new Date('2009-07-02');
const today = new Date();
const age = today.getFullYear() - birthday.getFullYear();
const isBirthdayPassed = today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
const ageCountdown = isBirthdayPassed ? age : age - 1;

document.getElementById('age').textContent = ageCountdown;
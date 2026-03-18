button = document.getElementById('btn');
total_score = 0;
button.addEventListener('click', () => {
    total_score += 1;
    button.innerHTML = total_score;
});
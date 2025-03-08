// Vocabulary Module
function showVocabulary() {
    document.getElementById('vocabulary-section').classList.toggle('hidden');
}

function checkVocabulary() {
    const answer = document.getElementById('vocab-input').value.toLowerCase();
    const result = answer === 'manzana' ? 'Correct!' : 'Try Again!';
    document.getElementById('vocab-result').innerText = result;
}

// Grammar Module
function showGrammar() {
    document.getElementById('grammar-section').classList.toggle('hidden');
}

function checkGrammar(isCorrect) {
    const result = isCorrect ? 'Correct!' : 'Incorrect. Try again!';
    document.getElementById('grammar-result').innerText = result;
}

// Smooth Scrolling (Optional)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

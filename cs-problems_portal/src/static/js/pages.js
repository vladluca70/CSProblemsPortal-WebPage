document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.problema').forEach(function(elem) {
        // Creează elementul pentru traducere
        const traducere = document.createElement('div');
        traducere.className = 'traducere';
        traducere.textContent = elem.getAttribute('data-eng');
        elem.appendChild(traducere);

        elem.addEventListener('mouseenter', function() {
            elem.classList.add('show-translation');
        });
        elem.addEventListener('mouseleave', function() {
            elem.classList.remove('show-translation');
        });
    });
});
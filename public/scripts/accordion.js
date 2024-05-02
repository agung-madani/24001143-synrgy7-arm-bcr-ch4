function toggleAccordion(button) {
    const body = button.nextElementSibling;

    if (body.classList.contains('hidden')) {
        // The accordion is currently closed, so open it
        body.classList.remove('hidden');
        button.querySelector('i').classList.replace('bi-chevron-down', 'bi-chevron-up');
    } else {
        // The accordion is currently open, so close it
        body.classList.add('hidden');
        button.querySelector('i').classList.replace('bi-chevron-up', 'bi-chevron-down');
    }
}
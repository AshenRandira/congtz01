document.addEventListener('DOMContentLoaded', function () {
    const surpriseButton = document.getElementById('surprise-button');
    const congratulations = document.getElementById('congratulations');

    surpriseButton.addEventListener('click', function () {
        surpriseButton.style.display = 'none';
        congratulations.style.display = 'block';
    });
});

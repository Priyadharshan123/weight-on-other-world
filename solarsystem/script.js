function calculateWeight() {
    const mass = document.getElementById('mass').value;
    const planetSelect = document.getElementById('planet');
    const planetGravity = planetSelect.value;

    
    if (!mass || !planetGravity) {
        alert('Please enter the mass and select a planet.');
        return;
    }

    
    const weight = mass * planetGravity;

  
    document.getElementById('result').innerText = 'The weight of the object on the selected planet is ' +weight+ ' N.';
}

function updateImage() {
    const planetSelect = document.getElementById('planet');
    const selectedOption = planetSelect.options[planetSelect.selectedIndex];
    const imageUrl = selectedOption.getAttribute('data-image');

   
    document.getElementById('planet-image').src = imageUrl;
}


document.querySelector('button').addEventListener('click', () => {
    console.log('Mass:', document.getElementById('mass').value);
    console.log('Planet Gravity:', document.getElementById('planet').value);
    console.log('Result:', document.getElementById('result').innerText);
});
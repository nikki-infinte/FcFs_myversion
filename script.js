document.getElementById('add').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'none';
});

document.getElementById('submitProcess').addEventListener('click', function() {
    const arrivalTime = document.getElementById('arrivalTime').value;
    const burstTime = document.getElementById('burstTime').value;

    if (arrivalTime && burstTime) {
        // Process the input data
        console.log(`Arrival Time: ${arrivalTime}, Burst Time: ${burstTime}`);

        // Hide the alert box
        document.getElementById('customAlert').style.display = 'none';

        // Clear the input fields
        document.getElementById('arrivalTime').value = '';
        document.getElementById('burstTime').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

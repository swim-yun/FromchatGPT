let startTime;
let timeout;

document.getElementById('start-button').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('result').style.opacity = '0';
    document.getElementById('test-area').style.backgroundColor = '#f5f5f5';
    document.getElementById('wait-text').style.opacity = '1';

    timeout = setTimeout(function() {
        document.getElementById('test-area').style.backgroundColor = '#2ed573';
        document.getElementById('wait-text').style.opacity = '0';
        startTime = new Date().getTime();
    }, Math.floor(Math.random() * 5000) + 1000); // Random delay between 1 to 6 seconds
});

document.getElementById('test-area').addEventListener('click', function() {
    if (startTime) {
        const endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        document.getElementById('result').textContent = `Your reaction time is ${reactionTime} ms.`;
        document.getElementById('result').style.opacity = '1';
        resetTest();
    } else {
        clearTimeout(timeout);
        document.getElementById('result').textContent = 'Too soon! Wait for the color to change.';
        document.getElementById('result').style.opacity = '1';
        resetTest();
    }
});

function resetTest() {
    document.getElementById('start-button').style.display = 'inline-block';
    startTime = null;
}

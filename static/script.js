document.getElementById("predictionForm").onsubmit = async function(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let response = await fetch("/predict", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    if (result.error) {
        document.getElementById("result").innerHTML = `<p class="text-danger">Error: ${result.error}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<h4>Prediction: ${result.prediction} (Probability: ${result.probability.toFixed(2)})</h4>`;
        updateGraph(result.probability);
    }
};

// Theme Selector
document.getElementById("themeSelector").addEventListener("change", function() {
    document.body.className = this.value;
});

// Line Graph for Predictions
let predictionData = [];
let predictionChart = new Chart(document.getElementById("predictionChart"), {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Prediction Probability",
            data: predictionData,
            borderColor: "blue",
            borderWidth: 2,
            fill: false
        }]
    },
    options: { responsive: true, scales: { y: { min: 0, max: 1 } } }
});

function updateGraph(probability) {
    let time = new Date().toLocaleTimeString();
    predictionChart.data.labels.push(time);
    predictionChart.data.datasets[0].data.push(probability);
    predictionChart.update();
}

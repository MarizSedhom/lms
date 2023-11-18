// Get the 2D rendering context of the 'earningsChart' canvas element
var ctx = document.getElementById('earningsChart').getContext('2d');

console.log("chart");

// Create a new Chart instance and associate it with the 'earningsChart' canvas
var earningsChart = new Chart(ctx, {
    // Set the type of chart to 'bar'
    type: 'bar',

    // Provide data for the chart, including labels and dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Earnings',
            data: [12000, 15000, 8000, 18000, 20000, 15000, 23000, 18000, 25000, 22000, 20000, 24000], // Replace with your actual data
            backgroundColor: '#e2dcf1',
            borderColor: '#ad9fde',      
            borderWidth: 1               
        }]
    },

    // Set chart options to control its appearance and behavior
    options: {
        responsive: true,               // Enable responsiveness for different screen sizes
        maintainAspectRatio: true,      // Maintain the aspect ratio of the chart
        aspectRatio: 2,                 // Set the aspect ratio of the chart

        // Configure scales for X and Y axes
        scales: {
            x: {
                barPercentage: 0.5,       // Set the width of the bars as a percentage of the space available for each data point
                categoryPercentage: 0.5   // Set the width of the category as a percentage of the space available for each category
            },
            y: {
                beginAtZero: true          // Start the Y-axis from zero
            }
        }
    }
});

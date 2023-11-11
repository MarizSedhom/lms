var ctx = document.getElementById('earningsChart').getContext('2d');
console.log("chart")
var earningsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Earnings',
            data: [12000, 15000, 8000, 18000, 20000, 15000, 23000, 18000, 25000, 22000, 20000, 24000], // replace with your data
            backgroundColor: '#e2dcf1',
            borderColor: '#ad9fde',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
        scales: {
          x: {
            barPercentage: 0.5,
            categoryPercentage: 0.5
        },
            y: {
                beginAtZero: true
            }
        }
    }
});
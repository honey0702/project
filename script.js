<script>
    // JavaScript to handle the chart rendering
    window.onload = function () {
      const ctx = document.getElementById('chartCanvas').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Geography', 'Politics', 'Math', 'History'],
          datasets: [{
            label: 'Scores',
            data: [75, 50, 90, 60],
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
          }],
        },
      });
    };
  </script>
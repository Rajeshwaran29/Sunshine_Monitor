    fetch("/api/sunshine-data")

      .then(res => res.json())
      .then(data => {
       
        document.getElementById("avgSunshine").textContent = data.average + " hrs";
        document.getElementById("todayDate").textContent = data.date;
        document.getElementById("dataSource").textContent = data.source;

       
        new Chart(document.getElementById("sunshineChart"), {
          type: "line",
          data: {
            labels: data.hourly_data.map(x => x.hour),
            datasets: [{
              label: "Sunshine Duration (hrs)",
              data: data.hourly_data.map(x => x.duration),
              borderColor: "#ff9900",
              backgroundColor: "rgba(255, 204, 0, 0.3)",
              tension: 0.3,
              fill: true,
              pointRadius: 5,
              pointBackgroundColor: "#ffcc00"
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: true },
              tooltip: { enabled: true }
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: "Hours" } },
              x: { title: { display: true, text: "Time of Day" } }
            }
          }
        });
      })
      .catch(err => {
        alert("Failed to load sunshine data. Please check API connection.");
        console.error(err);
      });
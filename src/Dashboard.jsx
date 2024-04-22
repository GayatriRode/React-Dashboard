import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Professors from './Professors';
import Students from './Student';

const Dashboard = () => {
  const barChartRef = useRef(null);
const lineChartRef = useRef(null);
const pieChartRef = useRef(null);

useEffect(() => {
  const renderCharts = () => {
    destroyChart(barChartRef);
    destroyChart(lineChartRef);
    destroyChart(pieChartRef);

    renderBarChart();
    renderLineChart();
    renderPieChart();
  };

  renderCharts();

  return () => {
    destroyChart(barChartRef);
    destroyChart(lineChartRef);
    destroyChart(pieChartRef);
  };
}, []);

const destroyChart = (chartRef) => {
  if (chartRef.current) {
    const chartInstance = Chart.getChart(chartRef.current);
    if (chartInstance) {
      chartInstance.destroy();
    }
  }
};

  const renderBarChart = () => {
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [{
            label: 'Student Data',
            data: [120, 190, 300, 325, 327, 330],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  const renderLineChart = () => {
    if (lineChartRef.current) {
      const ctx = lineChartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sept','Oct','Nov','Dec'],
          datasets: [{
            label: 'Data in %',
            data: [10, 20, 15, 25, 30, 11, 25, 36, 42,14, 45, 68],
            fill: false,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  };

  const renderPieChart = () => {
    if (pieChartRef.current) {
      const ctx = pieChartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Science', 'Maths', 'Economics', 'History', 'English'],
          datasets: [{
            label: 'Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  };


  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="cards">
        <div className="dashboard-card">
            <div className="card-img">
                <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img1.png" alt="Card Image" height={50} width={80}/>
            </div>
            <div className="card-cont">
                <span><b>New Students</b></span>
                <h3 className='text-success'>758</h3>
            </div>
        </div>

        <div className="dashboard-card">
            <div className="card-img">
                <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img2.png" alt="Card Image" height={50} width={80}/>
            </div>
            <div className="card-cont">
                <span><b>Total Courses</b></span>
                <h3 className='text-success'>15</h3>
            </div>
        </div>

        <div className="dashboard-card">
            <div className="card-img">
                <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img3.png" alt="Card Image" height={50} width={80}/>
            </div>
            <div className="card-cont">
                <span><b>Total Teachers</b></span>
                <h3 className='text-success'>90</h3>
            </div>
        </div>

        <div className="dashboard-card">
            <div className="card-img">
                <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img4.png" alt="Card Image" height={50} width={80}/>
            </div>
            <div className="card-cont">
                <span><b>Fess Collection</b></span>
                <h3 className='text-success'>485698</h3>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="chart-container">
              <h6>New Students Enrolled</h6>
              <canvas ref={barChartRef} />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="chart-container">
              <h6>Students Performance</h6>
              <canvas ref={lineChartRef} />
          </div>
        </div>
      </div>


      <div className="row">
        <div className="exam-schedule col-lg-6 col-md-6 col-sm-12">
          <h6>Exam Schedule</h6>
            <div className="day">Class 11 - 22-04-24</div>
            <div className="day">Class 11 - 23-04-24</div>
            <div className="day">Class 11 - 24-04-24</div>
            <div className="day">Class 11 - 25-04-24</div>
            <div className="day">Class 11 - 26-04-24</div>
            <div className="day">Class 11 - 27-04-24</div>
            <div className="day">Class 11 - 28-04-24</div>
            <div className="day">Class 11 - 29-04-24</div>
        </div>

          <div className="chart-container col-lg-6 col-md-6 col-sm-12">
            <h6>Obtain Mark Percentages</h6>
            <canvas ref={pieChartRef} id='pieChart'/>
          </div>   
      </div><br /><br />

      <div className="list">
          <Professors></Professors>
      </div>

      <div className="list">
          <Students></Students>
      </div>

    </div>
  );
}

export default Dashboard;
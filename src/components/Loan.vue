
<script>
import DoughnutChart from './DoughnutChart'
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  components:{
    DoughnutChart
  },
  
  data: () => ({
    chartdata: {
      labels: ['Appliance Purchase', 'Business Funding', ' Buying a Property', ' Car/2-wheeler Purchase', ' Credit Card Bill Consolidation', ' Debt Consolidation', ' Education', ' Family Event', 'Home Furnishing', 'Home Improvement', 'Medical', ' Travel/Vacation', ' Wedding'],
      datasets: [
        {
          backgroundColor: ['#2752c6','#4bddb6','#774f38','#7899ed','#9c67f7','#bf8d18','#c5e0dc','#d86b38','#e08e79','#e884e8','#ece5ce','#f1d4af','#fffaad'],
          data: [13,21,2,3,6,6,7,12,7,8,9,2,4]
        }
      ]
    },
    options: {
       title: {
            text: "",
            display: false
        },
        legend: {
                display: true,
                position: 'bottom',
                labels: {
                          usePointStyle: true,
                        }
            },
        tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue; });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);         
            return percentage + "%";
        }
      }},
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
       
</script>

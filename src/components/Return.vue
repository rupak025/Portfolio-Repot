
<script>
import BarChart from './BarChart'
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  components:{
    BarChart
  },
  
  data: () => ({
    chartdata: {
      labels: ['Q1 FY 17', 'Q2 FY 17', ' Q3 FY 17', ' Q1 FY 18', ' Q2 FY 18', ' Q3 FY 18', ' Q4 FY 18', ' Q1 FY 19', ' Q2 FY 19', ' Q3 FY 19', ' Q4 FY 19', ' Q1 FY 20', ' Q2 FY 20', ' Q3 FY 20'],
      datasets: [
        {
          backgroundColor: '#6dd400',
          data: [28,28.7,28.2,28.5,27.6,27.3,26.3,26.8,24.5,26.5,28.4,26.7,25.5,26.9]
        }
      ]
    },
    options: {
      title: {
            text: "",
            display: false
        },
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    //min: 22
                    suggestedMin: 22.00,
                    suggestedMax: 30.00,
                        callback: function(value) {
                           return value + "%"
                       }

                
                }
                
                
            }],
            xAxes: [{
                ticks: {
                    fontSize:10,
                    fontStyle:'normal',
                    minRotation:90
                    
                
                }
                
                
            }]
        
        },
        responsive: true,
        maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
       
</script>


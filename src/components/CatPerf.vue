
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
      labels: ['0-7 Days', '8-30 Days', ' 31-60 Days', ' 61-90 Days', ' 91-180 Days', ' 180 Days +'],
      datasets: [
        {
          backgroundColor: '#6dd400',
          data: [92.38,2.40,0.42,0.25,0.65,3.90]
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
                    suggestedMin: 0,
                    suggestedMax: 100,
                    
                
                }
                
                
            }],
            xAxes: [{
                ticks: {
                    fontSize:10,
                    fontStyle:'normal',
                    minRotation:0
                    
                
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


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
      labels: [["0-7 Days","(include","pre-closed)"], '8-30 Days', ' 31-60 Days', ' 61-90 Days', ' 91-180 Days', ' 180 Days +'],
      datasets: [
        {
          backgroundColor: '#6dd400',
          data: [92.38,2.40,0.42,0.25,0.65,3.90]
        }
      ]
    },
    options: {
      // To show the value on the top of bar(paste it in the options)
      animation: {
                duration: 0,
                onComplete: function () {
                    // render the value of the chart above the bar
                      var ctx = this.chart.ctx;
                      // eslint-disable-next-line no-undef
                      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                      ctx.fillStyle = this.chart.config.options.defaultFontColor;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      this.data.datasets.forEach(function (dataset) {
                          for (var i = 0; i < dataset.data.length; i++) {
                              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                              ctx.fillText(dataset.data[i], model.x, model.y - 5);
                          }
                      });
              }},
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
                    stepSize: 20 // changes on y axis
                
                }
                
                
            }],
            xAxes: [{
                ticks: {
                    fontSize:10,
                    fontStyle:'normal',
                    minRotation:0,
                    
                    
                
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

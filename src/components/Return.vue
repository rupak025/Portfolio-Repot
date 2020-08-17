<template>
  <div>
       <section class="average_return shadow-sm p-3 mb-5 bg-white rounded">
              <div class="container">
               <div class="row">
                  <div class="col-12">
              <div>
                <h3>Average Return (%)</h3>
                <h6>Quarter-wise returns for lenders are as follows</h6>
                <h6>Investors on Lendbox enjoy healthy return for thier investments in P2P Loans through us.</h6> 
              </div>
            
                    <div class=" chart">
                       <Bar-chart :chartdata="chartdata" :options="options" height="auto" width="auto"/>
                       
                    </div>
                </div>
                </div>
                </div>
        
      </section>

  </div>
</template>
 
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
        
        }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
       
</script>
<style scoped>

.chart {
  text-align: center;
  margin: auto;
  margin-top: 40px;
  
}



h3 {
  text-align: center;
  margin-top: 0%;
}
h6{
    text-align: center;
    font-weight: lighter;
}
.table{
    text-align: center;
    width: 170px;
    margin: 10px;
    border: 10px;
    
}
.tab_dat{
    background-color: #e9e9e9;
    border-radius: 10%,0,10%,0;
}
.category{
    
    height: 433px;
    margin-top: 8%;
    text-align: center;
    margin-left: 10%;
}
section{
    margin-bottom: 40px;
}
.tw0_bar{margin-top: 50px;}

</style>

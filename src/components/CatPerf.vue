<template>
    <div id="cat-perf">
        <section class="tw0_bar shadow-sm p-3 mb-5 bg-white rounded">
            <div class="container ">
              <div class="row">
                    <div class="col py-3 px-lg-5  left_box">
                      <div class="cat_port">
                        <h3>Category wise portfolio performance/split </h3>
                        
                        <table class=" table-bordered">
                          <thead>
                            <tr>
                              
                              <th class="tab_head" scope="col">Risk Categories</th>
                              <th class="tab_head" scope="col">Portfolio split %</th>
                              <th class="tab_head" scope="col">Portfolio Performance %</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              
                              <td>Very Low</td>
                              <td>1.76%</td>
                              <td>1.30%</td>
                            </tr>
                            <tr>
                              
                              <td>Low</td>
                              <td>35.60%</td>
                              <td>2.20%</td>
                            </tr>
                            <tr>
                              <td>Moderate</td>
                              <td>42.78%</td>
                              <td>3.76%</td>
                            </tr>
                            <tr>
                              
                              <td>High</td>
                              <td>14.84%</td>
                              <td>6.10%</td>
                            </tr>
                            <tr>
                              
                              <td>Very High</td>
                              <td>5.01%</td>
                              <td>6.74%</td>
                            </tr>
                            <tr>
                              <td>Extremely High</td>
                              <td>0%</td>
                              <td>0.00%</td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    
                     </div>
                <div class="col py-3 px-lg-5  right_box">
                    <div class="port">
                    <h3>Portfolio performance as per age </h3>
                    
                     <div class=" chart ">
                        <Bar-chart :chartdata="chartdata" :options="options" class="portbar" height="fit-content" width="auto "/>
                    </div></div>
                    
                  
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

section{
    margin-bottom: 40px;
}
.tw0_bar{margin-top: 50px;}

</style>
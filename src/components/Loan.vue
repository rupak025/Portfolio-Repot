<template>
    <div id="loan">
        <section class="Loan_purpose shadow-sm p-3 mb-5 bg-white rounded">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    
        <div>
                <h3>Loan Purpose</h3>
                <h6>Lendbox gives consumer loans to salaried and self-employed professional and funds are majorly</h6>
                <h6>used for personal purpose. Percentage split of various Loan Purpose is as follows:</h6> 
        </div>
            
                    <div class="chart">
                       <doughnut-chart :chartdata="chartdata" :options="options" />
                       
                    </div>
                </div>
            </div>
        </div>
    
    </section>


    </div>
</template>
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
      }}
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
       
</script>
<style scoped>
.chart {
  
margin: auto;
margin-top: 40px;
}



h3 {
  text-align: center;
}
h6{
    text-align: center;
    font-weight: lighter;
}


section{
    margin-bottom: 40px;
}
.tw0_bar{margin-top: 50px;}
</style>
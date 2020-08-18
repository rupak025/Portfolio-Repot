<template>
    <div id="performance">
        <section class="tw0_bar ">
            <div class="container ">
              <div class="row">
                    <div class="col py-3 px-lg-5  ">
                      <div class="cat_port">
                        <h3 style="margin-bottom:20px;">Category wise portfolio performance/split </h3>
                        
                        <table class=" table table-bordered">
                          <thead>
                            <tr>
                              
                              <th class="tab_head" scope="col">Risk Category</th>
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
                    <h3 style="margin-bottom:20px;">Portfolio performance as per age </h3>
                    
                     <div class=" chart ">
                        <!-- <Bar-chart :chartdata="chartdata" :options="options" class="portbar" height="fit-content" width="auto "/> -->
                        <CatPerf/>
                    </div></div>
                    
                  
                </div>
              </div>
            </div>
    
    </section>
    </div>
</template>
<script>
import CatPerf from "./CatPerf"
export default {
    name: 'performance',
    components: {
        CatPerf
    }
    
}
</script>
<style scoped>
h3 {
  text-align: center;
  margin-top: 0%;
  font-weight: bold;
  font-size: 140%;
}
h6{
    text-align: center;
    font-weight: lighter;
}

section{
    margin-bottom: 10px;
}
.tw0_bar{margin-top: 50px;}
table{
    height:fit-content;
}

</style>
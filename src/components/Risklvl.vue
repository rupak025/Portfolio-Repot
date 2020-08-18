<template>
    <div id="Risk">
        <section class="risk_level ">
        <div class="container">
          
        <div>
            <h3>Risk level in our plateform</h3>
            <h6>After doing rigorous checks on social, professional, financial and behavioral of the borrowrs, the accepted borrowers</h6>
            <h6 style="margin-bottom:20px;">are listed on the plateform with risk rating as defined below:</h6> 
        </div>
        
            <div class="row table_move">
                 <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded ">
                    <tr>
                      <td class="tab_dat rounded-top">A1-A2</td>
                      </tr>
                      <tr>
                      <th>Very Low</th>
                      </tr>
                  </table>
                  <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded">
                    <tr>
                      <td class="tab_dat">A1-A2</td>
                      </tr>
                      <tr>
                      <th>Low</th>
                      </tr>
                  </table>
                      <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded">
                    <tr>
                      <td class="tab_dat">A1-A2</td>
                      </tr>
                      <tr>
                      <th>Moderate</th>
                      </tr>
                  </table>
                      <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded">
                    <tr>
                      <td class="tab_dat">A1-A2</td>
                      </tr>
                      <tr>
                      <th>high</th>
                      </tr>
                  </table>
                      <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded">
                    <tr>
                      <td class="tab_dat">A1-A2</td>
                      </tr>
                      <tr>
                      <th>Very High</th>
                      </tr>
                  </table>
                      <table class="table table-bordered shadow-sm p-3 mb-5 bg-white rounded">
                    <tr class="tab_ro">
                      <td class="tab_dat">A1-A2</td>
                      </tr>
                      <tr>
                      <th>Extremely High</th>
                      </tr>
                  </table>
             
          </div>
      </div>
        </section>      
        
      

    </div>
</template>
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
/*big tablets to 1200px from 1024 to 1200px*/
@media only screen and (max-width: 1200px){
    
    
    .table{
    width: 140px;
    height: 95px; 
    margin: 5px;
    
    
}
    .table th{
        font-weight: 600;
    }
    .table_move{
        align-content: center;
        margin-left: 15px;
    }
    .category{
    
    height: 333px;
    margin-top: 0%;
    text-align: center;
    margin-left: 2%;
}
}
@media only screen and (max-width: 991px){
    
    
    .table{
    width: 166px;
    height: 95px; 
    margin: 10px;
    
    
}
    .table th{
        font-weight: 700;
    }
    .table_move{
        align-content: center;
        margin-left: 10%;
    }
  .category{
    
    height: 233px;
    margin-top: 5%;
    text-align: center;
    margin-left: 2%;
}
        
}
@media only screen and (max-width: 460px){
     .table{
    width: 140px;
    height: 67px; 
    margin: 5px;
    
    
}
    .table th{
        font-weight: 600;
    }

}
@media only screen and (max-width: 380px){
     .table{
    width: 120px;
    height: 67px; 
    margin: 5px;
    
    
}
    .table th{
        font-weight:bold;
        font-size: 80% ;
    }

}
</style>
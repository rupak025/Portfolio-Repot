<template>
  <div id="average">
       <section class="average_return ">
              <div class="container">
               <div class="row">
                  <div class="col-12">
              <div>
                <h3>Average Return (%)</h3>
                <h6>Quarter-wise returns for lenders are as follows</h6>
                <h6 style="margin-bottom:20px;">Investors on Lendbox enjoy healthy return for thier investments in P2P Loans through us.</h6> 
              </div>
            
                    <div class=" chart">
                       <!-- <Bar-chart :chartdata="chartdata" :options="options" height="auto" width="auto"/> -->
                       <Return/>
                    </div>
                </div>
                </div>
                </div>
        
      </section>

  </div>
</template>
<script>
import Return from './Return'
export default {
    name: 'average',
    components: {
        Return
    }
    
    
    
}
</script>
<style scoped>
h3 {
  text-align: center;
  margin-top: 0%;
}
h6{
    text-align: center;
    font-weight: lighter;
}
section{
    margin-bottom: 40px;
}

</style>
<template>
    <div id="purpose">
        <section class="Loan_purpose ">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    
        <div>
                <h3>Loan Purpose</h3>
                <h6>Lendbox gives consumer loans to salaried and self-employed professional and funds are majorly</h6>
                <h6 style="margin-bottom:40px;">used for personal purpose. Percentage split of various Loan Purpose is as follows:</h6> 
        </div>
            
                    <div style="margin-bottom:30px;">
                       <Loan/>
                    </div>
                </div>
            </div>
        </div>
    
    </section>


    </div>
</template>
<script>
import Loan from './Loan'
export default {
    name: 'purpose',
    components: {
        Loan

    }
}
</script>
<style scoped>

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

</style>
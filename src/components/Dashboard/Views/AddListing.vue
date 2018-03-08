<template>
    <div class="content">
        <div class="container-fluid">
            
            <div class="row"><card>
                <div class="col-md-12">
                <h3>Select your car </h3>
                        <div>
                            <p><strong>Find</strong> your car using the dropdowns below. First select its Make, then Model and later
                            select its year</p>
                        </div>
                        <div class="row">
                            <div class="col-md-4">

                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="VehicleMake" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Select Make
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Audi</button>
                                        <button class="dropdown-item" type="button">BMW</button>
                                        <button class="dropdown-item" type="button">Mazda</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="VehicleMake" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Select Model
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Audi</button>
                                        <button class="dropdown-item" type="button">BMW</button>
                                        <button class="dropdown-item" type="button">Mazda</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="VehicleMake" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Select Year
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">1999</button>
                                        <button class="dropdown-item" type="button">2000</button>
                                        <button class="dropdown-item" type="button">2001</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div></card>
</div>
            
           <div class="row"> 
            <card>

    
        <h3>Select additional features your car have</h3>
        <p>Features selected can either factory fitted or after market features.</p>
        <br>
        <hr>
    
  
    <div class="col-md-5">
      1 of 2
    </div>
    <div class="col-md-5">
      2 of 2
    </div>
  



</card></div>
</div>
</div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {
      Card
    }
  }
</script>
<style>

</style>

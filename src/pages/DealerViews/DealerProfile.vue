<template>
  <div class="row">
    <div class="col-lg-8 col-md-7">
      <edit-profile-form>

      </edit-profile-form>
    </div>
    <div class="col-lg-4 col-md-5">
      <user-card>

      </user-card>
    </div>
  </div>
</template>
<script>
import EditDealerProfileForm from './DealerProfile/EditDealerProfileForm.vue'
import DealerCard from './DealerProfile/DealerCard.vue'

  export default {
    components: {
      EditDealerProfileForm,
      DealerCard
    }
  }

</script>
<style>

</style>

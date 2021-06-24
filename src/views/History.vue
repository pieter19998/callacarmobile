<template>
  <BaseLayout>
    <ion-list>
      <ion-item v-for="ride in rides" :router-link="`/HistoryDetail/${ride.id}`" :key="ride.id">
        {{ ride.destination }}
        {{ ride.date }}
      </ion-item>
    </ion-list>
  </BaseLayout>
</template>

<script>
import {
  IonItem,
  IonList,
} from '@ionic/vue';
import {defineComponent} from 'vue';
import BaseLayout from "./layout/BaseLayout";

export default defineComponent({
  name: "History",
  components: {
    BaseLayout,
    IonItem,
    IonList,
  },
  data() {
    return {
      rides: [
        {id: 1, date: "29-03-2021", destination: "Den Bosch"},
        {id: 1, date: "29-03-2021", destination: "Utrecht"},
        {id: 1, date: "29-03-2021", destination: "Rotterdam"},
        {id: 1, date: "30-03-2021", destination: "Home"},
      ]
    }
  }
});
</script>

<style scoped>
.my-custom-menu {
  --width: 500px;
}
</style>
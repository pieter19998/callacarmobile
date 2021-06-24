<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons>

        </IonButtons>

      </IonToolbar>
    </IonHeader>
    <IonContent>
      <slot/>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonContent, IonHeader, IonButtons, IonPage, IonToolbar} from "@ionic/vue";

export default {
  name: "BaseLayout",
  components: {
    IonContent, IonHeader, IonButtons, IonPage, IonToolbar
  },
}
</script>

<style scoped>

</style>
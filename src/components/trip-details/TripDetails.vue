<template>
    <div v-if="distance" 
        class="trip-container column">
        <div class="col"> Distancia: <strong>{{ distance }} kms</strong> </div>
        <div class="col"> Duración: <strong>{{ timeDuration }}</strong> </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useMapStore } from '../../composables';

export default defineComponent({
  name: 'TripDetails',
  setup() {

      const { distance, duration } = useMapStore()
      function convertirMinutosAHoras(minutos: number): string {
        const dt = minutos ?? 6; // Usar 6 si minutos es undefined
        const horas = Math.floor(dt / 60);
        const minutosRestantes = dt % 60;

        if (horas === 0) {
            return `${minutosRestantes} min.`;
        } else if (minutosRestantes === 0) {
            return `${horas} h`;
        } else {
            return `${horas} h y ${minutosRestantes} min.`;
        }
    }

    const timeDuration = computed<string>(() => convertirMinutosAHoras(duration.value ?? 6));

    return {
      distance,      
      timeDuration,
    };
  }
});
</script>


<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 50px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 25px;
    left: 20px;
    padding: 10px;
    position: fixed;
    width: 350px;
}

strong {
    color: #42b983;
}
</style>
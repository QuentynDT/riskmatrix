<template>
  <div class="page-container">
    <h1 class="page-title">
      Customize Severities
    </h1>
    <Severity
      :severities="store.severities"
      @add-severity="store.addSeverity"
      @remove-severity="store.removeSeverity"
      @reset-severities="store.resetSeverities"
    />
    <button @click="navigateTo('/')" class="back-button">Back to Home</button>
  </div>
</template>

<script setup>
import { useRiskMatrixStore } from '~/stores/riskMatrixStore';
import Severity from '~/components/Severity.vue';

const store = useRiskMatrixStore();
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.back-button {
  padding: 0.75rem 2rem;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.1s ease-in-out;
  margin-top: 2rem;
}
.back-button:hover {
  background-color: #4b5563;
}
</style>
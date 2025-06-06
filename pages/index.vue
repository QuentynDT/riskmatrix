<template>
  <div class="page-container">
    <h1 class="page-title">
      Risk Assessment Matrix
    </h1>
    <RiskMatrixCustomization
      :likelihoods="store.likelihoods"
      :severities="store.severities"
      @add-likelihood="store.addLikelihood"
      @remove-likelihood="store.removeLikelihood"
      @reset-likelihoods="store.resetLikelihoods"
      @add-severity="store.addSeverity"
      @remove-severity="store.removeSeverity"
      @reset-severities="store.resetSeverities"
    />
    <button @click="navigateTo('/display')" class="display-button">Display Matrix</button>
  </div>
</template>

<script setup>
import { useRiskMatrixStore } from '~/stores/riskMatrixStore';
import RiskMatrixCustomization from '~/components/RiskMatrixCustomization.vue';

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

.display-button {
  padding: 0.75rem 2rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.1s ease-in-out;
  margin-top: 2rem;
}

.display-button:hover {
  background-color: #059669;
}
</style>
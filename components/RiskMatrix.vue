<template>
  <div class="risk-matrix-component-container">
    <h1 class="page-title">
      Risk Assessment Matrix
    </h1>
    <RiskMatrixDisplay :likelihoods="likelihoods" :severities="severities" />
    <RiskMatrixCustomization @update:likelihoods="updateLikelihoods" @update:severities="updateSeverities" :likelihoods="likelihoods" :severities="severities" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RiskMatrixDisplay from './RiskMatrixDisplay.vue';
import RiskMatrixCustomization from './RiskMatrixCustomization.vue';

const defaultLikelihoods = [
  { level: 15, label: 'Very Unlikely' },
  { level: 20, label: 'Unlikely' },
  { level: 25, label: 'Possible' },
  { level: 30, label: 'Likely' },
  { level: 35, label: 'Very Likely' },
];
const defaultSeverities = [
  { level: 15, label: 'Insignificant' },
  { level: 20, label: 'Minor' },
  { level: 25, label: 'Moderate' },
  { level: 30, label: 'Major' },
  { level: 35, label: 'Catastrophic' },
];

const likelihoods = ref([...defaultLikelihoods]);
const severities = ref([...defaultSeverities]);

const updateLikelihoods = (newLikelihoods) => {
  likelihoods.value = newLikelihoods;
};

const updateSeverities = (newSeverities) => {
  severities.value = newSeverities;
};
</script>

<style>
/* Global styles or styles specific to this container */
.risk-matrix-component-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: 'Inter', sans-serif;
  color: #333;
}
.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #4338ca;
  text-align: center;
}

@media (max-width: 640px) {
  .page-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
}
</style>
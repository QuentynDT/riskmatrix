<template>
  <div class="page-container">
    <h1 class="page-title">
      Risk Assessment Matrix
    </h1>
    <RiskMatrixDisplay
      :likelihoods="store.likelihoods"
      :severities="store.severities"
    />
    <div class="explanation-card">
      <h2 class="explanation-title">Understanding the Matrix:</h2>
      <ul class="explanation-list">
        <li>The matrix categorizes risks based on their <strong>Likelihood</strong> (how probable they are) and <strong>Severity</strong> (their impact if they occur).</li>
        <li><strong>Likelihood</strong> increases as you go down the rows.</li>
        <li><strong>Severity</strong> increases as you go right across the columns.</li>
        <li>Color coding helps quickly identify risk levels:
          <span class="color-dot low-risk"></span> Low,
          <span class="color-dot medium-risk"></span> Medium,
          <span class="color-dot high-risk"></span> High,
          <span class="color-dot extreme-risk"></span> Extreme.
        </li>
      </ul>
    </div>
    <button @click="navigateTo('/')" class="back-button">Back to Customization</button>
  </div>
</template>

<script setup>
import { useRiskMatrixStore } from '~/stores/riskMatrixStore';
import RiskMatrixDisplay from '~/components/RiskMatrixDisplay.vue';

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
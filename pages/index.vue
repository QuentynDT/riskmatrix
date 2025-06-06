<template>
  <div class="page-content-container">
    <RiskMatrixCustomization
      @update:likelihoods="updateLikelihoods"
      @update:severities="updateSeverities"
      :likelihoods="likelihoods"
      :severities="severities"
    />
    <button @click="goToDisplay" class="display-button">
      Display Risk Matrix
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // For programmatic navigation
import RiskMatrixCustomization from '~/components/RiskMatrixCustomization.vue';

// Define the default likelihoods and severities (these will be the initial state)
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

// Reactive state for likelihoods and severities
const likelihoods = ref([...defaultLikelihoods]);
const severities = ref([...defaultSeverities]);

// Functions to update the likelihoods and severities from the customization component
const updateLikelihoods = (newLikelihoods) => {
  likelihoods.value = newLikelihoods;
  // Potentially save to local storage or Pinia store here if you want to persist
};

const updateSeverities = (newSeverities) => {
  severities.value = newSeverities;
  // Potentially save to local storage or Pinia store here if you want to persist
};

// Router instance for navigation
const router = useRouter();

const goToDisplay = () => {
  // Pass the current likelihoods and severities as query parameters
  // or use a state management library (Pinia/Vuex) for more complex state
  router.push({
    path: '/display',
    query: {
      likelihoods: JSON.stringify(likelihoods.value),
      severities: JSON.stringify(severities.value)
    }
  });
};
</script>

<style scoped>
.page-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Take full width of the layout container */
  max-width: 42rem; /* Matches the width of customization cards */
}

.display-button {
  padding: 0.75rem 1.5rem;
  background-color: #10b981; /* Green color for display button */
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.1s ease-in-out;
  margin-top: 2rem;
  width: 100%;
  max-width: 42rem; /* Match card width */
}

.display-button:hover {
  background-color: #059669;
}

@media (max-width: 640px) {
  .display-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
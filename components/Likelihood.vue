<template>
  <div class="custom-inputs-card">
    <h2 class="custom-inputs-title">Customize Likelihoods:</h2>
    <div class="input-group">
      <label for="newLikelihoodLabel" class="input-label">Label:</label>
      <input type="text" id="newLikelihoodLabel" v-model="newLikelihood.label" placeholder="e.g., Impossible" class="text-input">
    </div>
    <div class="input-group">
      <label for="newLikelihoodLevel" class="input-label">Level:</label>
      <input type="number" id="newLikelihoodLevel" v-model.number="newLikelihood.level" placeholder="e.g., 0" class="text-input">
    </div>
    <button @click="handleAddLikelihood" class="add-button">Add Likelihood</button>
    <button @click="emit('reset-likelihoods')" class="reset-button">Reset Likelihoods</button>
    <div class="current-list-container">
      <h3>Current Likelihoods:</h3>
      <ul>
        <li v-for="(likelihood, index) in likelihoods" :key="likelihood.level || index">
          {{ likelihood.label }} (Level: {{ likelihood.level }})
          <button @click="emit('remove-likelihood', index)" class="remove-button">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  likelihoods: {
    type: Array,
    required: true
  }
});

const emit = defineEmits([
  'add-likelihood',
  'remove-likelihood',
  'reset-likelihoods'
]);

const newLikelihood = ref({
  label: '',
  level: null,
});

const handleAddLikelihood = () => {
  if (newLikelihood.value.label && newLikelihood.value.level !== null && newLikelihood.value.level >= 0) {
    emit('add-likelihood', { label: newLikelihood.value.label, level: newLikelihood.value.level });
    newLikelihood.value.label = '';
    newLikelihood.value.level = null;
  } else {
    alert('Please enter a valid label and a non-negative level for the new likelihood.');
  }
};
</script>

<style scoped>
.custom-inputs-card {
  margin-top: 2.5rem;
  width: 100%;
  max-width: 42rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
}
.custom-inputs-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4b5563;
  text-align: center;
}
.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.input-label {
  font-weight: 600;
  margin-right: 0.5rem;
  width: 60px;
}
.text-input {
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.text-input:focus {
  outline: none;
  border-color: #4338ca;
  box-shadow: 0 0 0 2px rgba(67, 56, 202, 0.2);
}
.add-button, .reset-button {
  padding: 0.75rem 1.5rem;
  background-color: #4338ca;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.1s ease-in-out;
  margin-top: 1rem;
  margin-right: 1rem;
}
.add-button:hover, .reset-button:hover {
  background-color: #312e81;
}
.reset-button {
  background-color: #ef4444;
  margin-right: 0;
}
.reset-button:hover {
  background-color: #dc2626;
}
.current-list-container {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}
.current-list-container h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #4b5563;
}
.current-list-container ul {
  list-style: none;
  padding: 0;
}
.current-list-container li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #333;
}
.remove-button {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  transition: background-color 0.2s;
  flex-shrink: 0;
}
.remove-button:hover {
  background-color: #dc2626;
}
@media (max-width: 640px) {
  .input-group {
    flex-direction: column;
    align-items: flex-start;
  }
  .input-label {
    width: auto;
    margin-bottom: 0.25rem;
  }
  .add-button, .reset-button {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0.75rem;
  }
}
</style>
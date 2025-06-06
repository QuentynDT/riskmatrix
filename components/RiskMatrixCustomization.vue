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
    <button @click="addLikelihood" class="add-button">Add Likelihood</button>
    <button @click="resetLikelihoods" class="reset-button">Reset Likelihoods</button>
    <div class="current-list-container">
      <h3>Current Likelihoods:</h3>
      <ul>
        <li v-for="(likelihood, index) in likelihoods" :key="index">
          {{ likelihood.label }} (Level: {{ likelihood.level }})
          <button @click="removeLikelihood(index)" class="remove-button">x</button>
        </li>
      </ul>
    </div>
  </div>

  <div class="custom-inputs-card">
    <h2 class="custom-inputs-title">Customize Severities:</h2>
    <div class="input-group">
      <label for="newSeverityLabel" class="input-label">Label:</label>
      <input type="text" id="newSeverityLabel" v-model="newSeverity.label" placeholder="e.g., Negligible" class="text-input">
    </div>
    <div class="input-group">
      <label for="newSeverityLevel" class="input-label">Level:</label>
      <input type="number" id="newSeverityLevel" v-model.number="newSeverity.level" placeholder="e.g., 0" class="text-input">
    </div>
    <button @click="addSeverity" class="add-button">Add Severity</button>
    <button @click="resetSeverities" class="reset-button">Reset Severities</button>
    <div class="current-list-container">
      <h3>Current Severities:</h3>
      <ul>
        <li v-for="(severity, index) in severities" :key="index">
          {{ severity.label }} (Level: {{ severity.level }})
          <button @click="removeSeverity(index)" class="remove-button">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  likelihoods: Array,
  severities: Array
});

const emit = defineEmits(['update:likelihoods', 'update:severities']);

const newLikelihood = ref({
  label: '',
  level: null,
});
const newSeverity = ref({
  label: '',
  level: null,
});

const addLikelihood = () => {
  if (newLikelihood.value.label && newLikelihood.value.level !== null && newLikelihood.value.level >= 0) {
    const levelExists = props.likelihoods.some(l => l.level === newLikelihood.value.level);
    if (levelExists) {
      alert('A likelihood with this level already exists. Please use a unique level.');
      return;
    }
    const updatedLikelihoods = [...props.likelihoods, { label: newLikelihood.value.label, level: newLikelihood.value.level }];
    updatedLikelihoods.sort((a, b) => a.level - b.level);
    emit('update:likelihoods', updatedLikelihoods);
    newLikelihood.value.label = '';
    newLikelihood.value.level = null;
  } else {
    alert('Please enter a valid label and a non-negative level for the new likelihood.');
  }
};

const removeLikelihood = (index) => {
  const updatedLikelihoods = props.likelihoods.filter((_, i) => i !== index);
  emit('update:likelihoods', updatedLikelihoods);
};

const resetLikelihoods = () => {
  const defaultLikelihoods = [
    { level: 15, label: 'Very Unlikely' },
    { level: 20, label: 'Unlikely' },
    { level: 25, label: 'Possible' },
    { level: 30, label: 'Likely' },
    { level: 35, label: 'Very Likely' },
  ];
  emit('update:likelihoods', [...defaultLikelihoods]);
};

const addSeverity = () => {
  if (newSeverity.value.label && newSeverity.value.level !== null && newSeverity.value.level >= 0) {
    const levelExists = props.severities.some(s => s.level === newSeverity.value.level);
    if (levelExists) {
      alert('A severity with this level already exists. Please use a unique level.');
      return;
    }
    const updatedSeverities = [...props.severities, { label: newSeverity.value.label, level: newSeverity.value.level }];
    updatedSeverities.sort((a, b) => a.level - b.level);
    emit('update:severities', updatedSeverities);
    newSeverity.value.label = '';
    newSeverity.value.level = null;
  } else {
    alert('Please enter a valid label and a non-negative level for the new severity.');
  }
};

const removeSeverity = (index) => {
  const updatedSeverities = props.severities.filter((_, i) => i !== index);
  emit('update:severities', updatedSeverities);
};

const resetSeverities = () => {
  const defaultSeverities = [
    { level: 15, label: 'Insignificant' },
    { level: 20, label: 'Minor' },
    { level: 25, label: 'Moderate' },
    { level: 30, label: 'Major' },
    { level: 35, label: 'Catastrophic' },
  ];
  emit('update:severities', [...defaultSeverities]);
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
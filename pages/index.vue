<template>
  <div class="homepage-container">
    <h1 class="page-title">
      Risk Assessment Dashboard
    </h1>
    <div class="button-grid">
      <button @click="navigateTo('/customize/likelihood')" class="nav-button likelihood-button">
        Customize Likelihoods
      </button>
      <button @click="navigateTo('/customize/severity')" class="nav-button severity-button">
        Customize Severities
      </button>
      <button @click="navigateTo('/display')" class="nav-button view-matrix-button">
        View Risk Matrix
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 2rem);
  padding: 1rem;
  text-align: center;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 400px;
}

.nav-button {
  padding: 1.5rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.15), 0 3px 6px -1px rgba(0, 0, 0, 0.08);
}

.likelihood-button {
  background-color: #4f46e5;
}
.likelihood-button:hover {
  background-color: #4338ca;
}

.severity-button {
  background-color: #0d9488;
}
.severity-button:hover {
  background-color: #0f766e;
}

.view-matrix-button {
  background-color: #10b981;
}
.view-matrix-button:hover {
  background-color: #059669;
}

@media (min-width: 640px) {
  .button-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 900px; 
  }
}
</style>
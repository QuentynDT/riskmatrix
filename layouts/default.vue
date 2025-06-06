<template>
  <div class="risk-matrix-layout-container">
    <h1 class="page-title">
      Risk Assessment Matrix
    </h1>
    <slot /> </div>
</template>

<script setup>
</script>

<style>
/* Global styles for the layout */
body {
  margin: 0;
  background-color: #f0f2f5; /* A light background for the whole app */
}

.risk-matrix-layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items to the start of the cross-axis */
  padding: 1rem;
  color: #303030;
  font-family: 'Inter', sans-serif;
  min-height: 100vh; /* Ensure it takes full viewport height */
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
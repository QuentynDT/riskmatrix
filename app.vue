<template>
  <div class="app-container">
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
  background-color: #f0f2f5;
  font-family: 'Inter', sans-serif;
  color: #333;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
}
.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #4338ca;
  text-align: center;
}

.explanation-card {
  margin-top: 2.5rem;
  width: 100%;
  max-width: 42rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
}
.explanation-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4b5563;
  text-align: center;
}

.explanation-list {
  list-style: disc;
  padding-left: 1.25rem;
  color: #4b5563;
  line-height: 1.5;
}

.explanation-list li {
  margin-bottom: 0.5rem;
}
.color-dot {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
  vertical-align: middle;
}
.low-risk {
  background-color: #00d14d;
}
.medium-risk {
  background-color: #ffd735;
}
.high-risk {
  background-color: #f97316;
}
.extreme-risk {
  background-color: #dc2626;
}

@media (max-width: 640px) {
  .page-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
  .explanation-card {
    padding: 1rem;
  }
  .explanation-title {
    font-size: 1.25rem;
  }
  .explanation-list {
    font-size: 0.875rem;
  }
}
</style>
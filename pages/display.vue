<template>
  <div class="page-content-container">
    <RiskMatrixDisplay :likelihoods="displayLikelihoods" :severities="displaySeverities" />
    <button @click="goBackToCustomize" class="back-button">
      Go Back to Customize
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RiskMatrixDisplay from '~/components/RiskMatrixDisplay.vue';

const route = useRoute();
const router = useRouter();

const displayLikelihoods = ref([]);
const displaySeverities = ref([]);

onMounted(() => {
  // Retrieve data from query parameters
  if (route.query.likelihoods) {
    displayLikelihoods.value = JSON.parse(route.query.likelihoods);
  }
  if (route.query.severities) {
    displaySeverities.value = JSON.parse(route.query.severities);
  }
});

const goBackToCustomize = () => {
  router.push('/');
};
</script>

<style scoped>
.page-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
.back-button {
  padding: 0.75rem 1.5rem;
  background-color: #64748b; /* Grey color for back button */
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
.back-button:hover {
  background-color: #475569;
}

@media (max-width: 640px) {
  .explanation-card {
    padding: 1rem;
  }
  .explanation-title {
    font-size: 1.25rem;
  }
  .explanation-list {
    font-size: 0.875rem;
  }
  .back-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
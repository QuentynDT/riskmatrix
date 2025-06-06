<template>
  <div class="risk-matrix-card">
    <div class="risk-matrix-grid">
      <div class="grid-corner-cell">
      </div>
      <div v-for="severity in severities" :key="severity.level"
           class="grid-header-cell severity-header">
        {{ severity.label }}
      </div>
      <template v-for="(likelihood, lIndex) in likelihoods" :key="likelihood.level">
        <div class="grid-header-cell likelihood-header">
          {{ likelihood.label }}
        </div>
        <div v-for="(severity, sIndex) in severities" :key="severity.level"
             :class="[
               getRiskClass(likelihood.level, severity.level),
               {
                 'no-bottom-border': lIndex === likelihoods.length - 1,
                 'no-left-border': sIndex === 0,
                 'no-right-border': sIndex === severities.length - 1
               }
             ]"
             class="risk-cell">
          {{ getRiskLabel(likelihood.level, severity.level) }}
        </div>
      </template>
    </div>
  </div>

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
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  likelihoods: Array,
  severities: Array
});

const calculateRiskLevel = (likelihoodLevel, severityLevel) => {
  return likelihoodLevel * severityLevel;
};

const getRiskClass = (likelihoodLevel, severityLevel) => {
  const risk = calculateRiskLevel(likelihoodLevel, severityLevel);
  if (risk <= 400) {
    return 'low-risk';
  } else if (risk <= 625) {
    return 'medium-risk';
  } else if (risk <= 900) {
    return 'high-risk';
  } else {
    return 'extreme-risk';
  }
};

const getRiskLabel = (likelihoodLevel, severityLevel) => {
  const risk = calculateRiskLevel(likelihoodLevel, severityLevel);
  if (risk <= 400) {
    return 'Low';
  } else if (risk <= 625) {
    return 'Medium';
  } else if (risk <= 900) {
    return 'High';
  } else {
    return 'Extreme';
  }
};
</script>

<style scoped>
.risk-matrix-card {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}
.risk-matrix-grid {
  --grid-columns-count: v-bind(severities.length);
  --grid-rows-count: v-bind(likelihoods.length);
  display: grid;
  grid-template-columns: 80px repeat(var(--grid-columns-count), minmax(0, 1fr));
  grid-template-rows: 80px repeat(var(--grid-rows-count), minmax(0, 1fr));
}
.grid-corner-cell {
  padding: 0.5rem;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  background-color: #6380dd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
}
.grid-header-cell {
  padding: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  background-color: #6380dd;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  color: #0c008f;
}
.grid-header-cell.severity-header:last-child {
  border-right: none;
}
.risk-cell {
  padding: 0.75rem;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #333;
  border-left: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  margin: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.risk-cell:hover {
  transform: scale(1.03);
}
.low-risk {
  background-color: #00d14d;
}
.low-risk:hover {
  background-color: #06b948;
}
.medium-risk {
  background-color: #ffd735;
}
.medium-risk:hover {
  background-color: #eab308;
}
.high-risk {
  background-color: #f97316;
}
.high-risk:hover {
  background-color: #ea580c;
}
.extreme-risk {
  background-color: #dc2626;
}
.extreme-risk:hover {
  background-color: #b91c1c;
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

@media (max-width: 640px) {
  .risk-matrix-grid {
    grid-template-columns: 60px repeat(var(--grid-columns-count), minmax(0, 1fr));
    grid-template-rows: 60px repeat(var(--grid-rows-count), minmax(0, 1fr));
  }
  .grid-corner-cell, .grid-header-cell {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  .risk-cell {
    font-size: 0.625rem;
    padding: 0.5rem;
    margin: 0.125rem;
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
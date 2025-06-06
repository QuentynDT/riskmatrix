import { defineStore } from 'pinia';

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

export const useRiskMatrixStore = defineStore('riskMatrix', {
  state: () => ({
    likelihoods: [...defaultLikelihoods],
    severities: [...defaultSeverities],
  }),
  actions: {
    addLikelihood(likelihood) {
      const levelExists = this.likelihoods.some(l => l.level === likelihood.level);
      if (levelExists) {
        alert('A likelihood with this level already exists. Please use a unique level.');
        return false;
      }
      this.likelihoods.push(likelihood);
      this.likelihoods.sort((a, b) => a.level - b.level);
      return true;
    },
    removeLikelihood(index) {
      this.likelihoods.splice(index, 1);
    },
    resetLikelihoods() {
      this.likelihoods = [...defaultLikelihoods];
    },
    addSeverity(severity) {
      const levelExists = this.severities.some(s => s.level === severity.level);
      if (levelExists) {
        alert('A severity with this level already exists. Please use a unique level.');
        return false;
      }
      this.severities.push(severity);
      this.severities.sort((a, b) => a.level - b.level);
      return true;
    },
    removeSeverity(index) {
      this.severities.splice(index, 1);
    },
    resetSeverities() {
      this.severities = [...defaultSeverities];
    },
  },
});
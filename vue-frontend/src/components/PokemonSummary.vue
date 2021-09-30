<template>
  <div
    class="c-pokemon-summary"
    v-if="pokemon"
    @click="$emit('select', pokemon.id)"
  >
    <h4>{{ pokemon.name }}</h4>
    <img :alt="pokemon.name" :src="pokemon.sprites.front_default" />
    <h4 v-if="isCaught">In your team!</h4>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Pokemon } from '@/data/model';

defineProps<{ pokemon: Pokemon; isCaught: boolean }>();
defineEmits(['select']);
</script>

<style>
.c-pokemon-summary {
  border: 1px solid black;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>

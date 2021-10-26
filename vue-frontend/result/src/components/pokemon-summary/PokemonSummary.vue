<template>
  <div class="c-pokemon-summary" v-if="pokemon" @click="onSelect">
    <h4>{{ pokemon.name }}</h4>
    <img :alt="pokemon.name" :src="pokemon.sprites.front_default" />
    <h4 v-if="isCaught">In your team!</h4>
  </div>
</template>

<style lang="scss">
@import './PokemonSummary.scss';
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Pokemon } from '@/data/model';

const props = defineProps<{ pokemon: Pokemon; isCaught: boolean }>();
const emit = defineEmits(['select']);

function onSelect() {
  emit('select', props.pokemon.id);
}
</script>

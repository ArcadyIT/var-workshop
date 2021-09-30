<template>
  <template v-if="pokemon">
    <h4>{{ pokemon.name }}</h4>
    <img :alt="pokemon.name" :src="pokemon.sprites.front_default" />
  </template>
  <button @click="$emit('select', 0)">Back</button>
  <button class="btn btn-catch" :disabled="isCaught" @click="catchPokemon">
    Throw Pokeball
  </button>
  <h4>{{ message }}</h4>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';
import { Pokemon } from '@/data/model';
import { capitalizeFirstLetter } from '@/helpers/string';

const emit = defineEmits(['select', 'caught']);
const props = defineProps<{ pokemon: Pokemon; caughtIds: number[] }>();

const message = ref('');

const isCaught = computed(() => {
  return props.caughtIds.some((x) => x === props.pokemon.id);
});

const displayName = computed(() => {
  return capitalizeFirstLetter(props.pokemon.name);
});

function catchPokemon() {
  message.value = '';
  let minutes = new Date().getMinutes();
  if (minutes % 2 === 0) {
    message.value = `Wow! You've caught: ${displayName.value}`;
    emit('caught', props.pokemon.id);
    return;
  }
  message.value = `Oh no, ${displayName.value} got away! (you should wait a minute)`;
}
</script>

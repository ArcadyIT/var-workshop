import { shallowMount } from '@vue/test-utils';
import PokemonDetail from '@/components/PokemonDetail.vue';
import DataSet from '@/data/dataset.json';

describe('PokemonDetail.vue', () => {
  it('allows catching of the pokemon when conditions are met', () => {
    const pokemon = DataSet.pokemon[0];
    const wrapper = shallowMount(PokemonDetail, {
      props: { pokemon, caughtIds: [] },
    });

    const minutes = new Date().getMinutes();
    wrapper.vm.catchPokemon();
    if (minutes % 2 === 0) {
      expect(wrapper.emitted()['caught']).toBeTruthy();
    } else {
      expect(wrapper.emitted()['caught']).toBeFalsy();
    }
  });
});

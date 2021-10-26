import { shallowMount } from '@vue/test-utils';
import PokemonListContext from '@/contexts/PokemonListContext.vue';
import DataSet from '@/data/dataset.json';

//todo typed
describe('PokemonListContext.vue', () => {
  it('allows catching of the pokemon when conditions are met', () => {
    const pokemon = DataSet.pokemon;
    const wrapper = shallowMount(PokemonListContext);

    const minutes = new Date().getMinutes();
    wrapper.vm.onThrowPokeBall(pokemon[0].id);
    if (minutes % 2 === 0) {
      expect(wrapper.vm.caughtIds).toContain(pokemon[0].id);
    } else {
      expect(wrapper.vm.caughtIds.length).toBe(0);
    }
  });
});

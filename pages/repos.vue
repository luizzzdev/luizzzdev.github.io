<template>
  <section class="section">
    <div class="container columns is-multiline is-fluid">
      <card v-for="repo in repositories" :title="repo.name" class="column is-4"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from '~/components/Card';
import { RepositoryResource } from '~/resources/RepositoryResource';
import { Repository } from '~/interfaces/repository';

interface Card {
  title: string;
}

interface HomePageData {
  repositories: Array<Repository>;
}

@Component({
  components: {
    Card,
  },
  async asyncData(): Promise<HomePageData> {
    const repositories = await RepositoryResource.fetchRepositories();

    return {
      repositories,
    };
  },
})
export default class HomePage extends Vue {
  cards: Array<Card> = [];
}
</script>

import { GithubApi } from '~/resources/api';
import { Repository } from '~/interfaces/repository';

export const RepositoryResource = {
  async fetchRepositories(): Promise<Array<Repository>> {
    return (await GithubApi.get('/users/luizzzdev/repos')).data;
  },
};

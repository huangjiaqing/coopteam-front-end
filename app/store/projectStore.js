import { observable, action, runInAction } from 'mobx';
import { getProjects } from 'services/projectApi';

export default new class ProjectStore {

  @observable projects = []

  @action getProjects = async (orgId) => {
    const res = await getProjects(orgId);
    console.log(res);
  }
};
import { observable, action, runInAction } from 'mobx';
import { getOrgs, getProjects } from 'services/orgApi';

export default new class OrgStore {

  @observable orgs = [];
  @observable projects = [];
  
  @action getOrgs = async () => {
    const res = await getOrgs();
    runInAction(() => {
      this.orgs = res.data;
    });
  }

  @action getProjects = async (orgId) => {
    const res = await getProjects(orgId);
    runInAction(() => {
      this.projects = res.data;
    });
  }
  
};
import { observable, action, runInAction } from 'mobx';
import { getList } from 'services/orgApi';

class OrgStore {

  @observable list = [];
  
  @action getList = async () => {
    const res = await getList();
    runInAction(() => {
      this.list = res.data;
    });
  }
}

export default new OrgStore;
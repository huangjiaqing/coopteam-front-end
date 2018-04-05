import { observable, action, runInAction } from 'mobx';
import { getList } from 'services/orgApi';

class OrgStore {

  @observable list = [];
  
  @action getList = async () => {
    try {
      const res = await getList();
      runInAction(() => {
        this.list = res.data;
      });
    } catch(e) {
      throw e;
    }
  }
}

export default new OrgStore;
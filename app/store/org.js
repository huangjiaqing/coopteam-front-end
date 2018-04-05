import { observable, action } from 'mobx';
import { getList } from 'services/orgApi';

class OrgStore {

  @observable list = [];
  
  @action getList = async () => {
    try {
      const res = await getList();
      this.list = res.data;
    } catch(e) {
      throw e;
    }
  }
}

export default new OrgStore;
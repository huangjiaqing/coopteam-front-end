import Mock from 'mockjs';

export default function () {

  let orgList = [
    {
      orgId: 1,
      name: '油车科技'
    },
    {
      orgId: 2,
      name: 'coopteam集团'
    },
    {
      orgId: 3,
      name: '沃尔玛'
    }
  ];


  Mock.mock('/orgList', 'get', (options) => {
    return orgList;
  });
}
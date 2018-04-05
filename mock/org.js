import Mock from 'mockjs';

export default function () {

  let orgList = [
    {
      orgId: 1,
      title: '油车科技'
    },
    {
      orgId: 2,
      title: 'coopteam集团'
    },
    {
      orgId: 3,
      title: '沃尔玛'
    }
  ];


  Mock.mock('/orgList', 'get', (options) => {
    return orgList;
  });
}
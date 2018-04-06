import Mock from 'mockjs';

export default function () {

  const orgList = [
    {
      orgId: '1',
      name: '油车科技'
    },
    {
      orgId: '2',
      name: 'coopteam集团'
    },
    {
      orgId: '3',
      name: '沃尔玛'
    }
  ];

  const projectList = [
    {
      projectId: '1',
      name: '立白悦协作',
      stared: true,
      isInBin: false,
    },
    {
      projectId: '2',
      name: '北控项目面板',
      stared: false,
      isInBin: false,
    },
    {
      projectId: '3',
      name: '固定资产',
      stared: false,
      isInBin: false,
    },
    {
      projectId: '4',
      name: '长江证券',
      stared: true,
      isInBin: false,
    },
    {
      projectId: '5',
      name: '黄嘉庆的项目',
      stared: false,
      isInBin: false,
    },
    {
      projectId: '6',
      name: '天明的项目',
      stared: false,
      isInBin: false,
    },
    {
      projectId: '7',
      name: '梁爽的项目',
      stared: false,
      isInBin: false,
    },
    {
      projectId: '8',
      name: '大招科技项目',
      stared: false,
      isInBin: true,
    },
    {
      projectId: '9',
      name: '绩牛科技项目',
      stared: false,
      isInBin: true,
    },
    {
      projectId: '10',
      name: '驻云科技项目',
      stared: false,
      isInBin: false,
    },
  ];


  Mock.mock('/orgList', 'get', (options) => {
    return orgList;
  });

  Mock.mock(/\/(getProjects)(\?orgId=\w)?/, 'get', (req) => {
    const orgId = req.url.slice(-1);

    switch(orgId) {
    case '1':
      return projectList.slice(0, 3);
    case '2':
      return projectList.slice(3, 5);
    case '3':
      return projectList.slice(5, 10);
    default: 
      return [];
    }
  });
}
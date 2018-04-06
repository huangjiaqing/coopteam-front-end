export const orgs = [
  {
    orgId: '1',
    name: '油车科技',
    members: [
      {
        _id: '1',
        name: '黄嘉庆',
      },
      {
        _id: '2',
        name: '成龙',
      },
      {
        _id: '3',
        name: '李冰冰'
      }
    ],
    projects: [
      {
        projectId: '1',
        name: '立白悦协作',
        stared: true,
        isInBin: false,
        stages: [
          {
            stageId: '1',
            name: '待处理',
            taskCount: 3,
            tasks: [
              {
                taskId: '1',
                content: '北控清洁能源的项目对接',
                executor: {
                  name: '黄嘉庆',
                  avatarUrl: '',
                },
              },
              {
                taskId: '2'
              }
            ],
          },
          {
            stageId: '2',
            name: '进行中',
            taskCount: 0
          },
          {
            stageId: '3',
            name: '已完成',
            taskCount: 0
          },
        ],
      },
      {
        projectId: '2',
        name: '北控项目面板',
        stared: false,
        isInBin: false,
      },
    ],
  },
  {
    orgId: '2',
    name: 'coopteam集团',
    projects: [
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
    ]
  },
  {
    orgId: '3',
    name: '沃尔玛',
    projects: [
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
    ]
  }
];

export const admin = [
  {
    _id: '1',
    name: '黄嘉庆',
    orgs
  },
  {
    _id: '2',
    name: '成龙',
    orgs
  }
];
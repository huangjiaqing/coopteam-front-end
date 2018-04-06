import Mock from 'mockjs';

export default function () {

  Mock.mock(/\/(getStages)(\?projectId=\w)?/, 'get', (req) => {
    const projectId = req.url.slice(-1);

    switch(projectId) {
    case '1': {
      return [
        {
          stage: 1,
          name: '待处理',
          taskCount: 3
        },
        {
          stage: 2,
          name: '进行中',
          taskCount: 0,
        },
        {
          stage: 3,
          name: '已完成',
          taskCount: 2,
        }
      ];
    }
    case '2': {
      return [
        {
          stage: 1,
          name: '待处理',
          taskCount: 3
        },
        {
          stage: 2,
          name: '进行中',
          taskCount: 0,
        },
        {
          stage: 3,
          name: '已完成',
          taskCount: 2,
        }
      ];
    }
    }
  });
}
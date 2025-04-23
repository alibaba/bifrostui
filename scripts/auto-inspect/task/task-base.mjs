export default class TaskBase {
  constructor(options) {
    this.options = options;
    this.task = options.task;
    this.result = {
      // 任务名称
      name: options.name,
      // 任务描述
      desc: options.desc,
      // 任务是否通过
      pass: false,
      // 任务执行是否异常
      taskException: false,
      // 任务不通过时的报表数据
      data: null,
      // 任务执行异常时的报错信息
      error: null,
    };
  }

  async run(params) {
    try {
      const result = await this.task(params);
      this.result.pass = result.pass;
      this.result.data = result.data;
    } catch (error) {
      this.result.pass = false;
    }
    return this.result;
  }
}

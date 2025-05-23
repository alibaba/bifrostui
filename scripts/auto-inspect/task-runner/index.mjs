import { input } from '@inquirer/prompts';

export default class TaskRunner {
  constructor(tasks = []) {
    this.tasks = tasks;
    this.results = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  async getInputComponents(message) {
    let componentName = '';
    while (!componentName) {
      componentName = await input({ message });
    }
    return componentName.split(' ').filter((i) => i);
  }

  /**
   * 执行巡检任务
   * 脚本任务所有组件全量执行
   * AI任务按输入组件范围执行，输入 -i 跳过当前任务
   */
  async run() {
    for (const task of this.tasks) {
      let inputComponents;
      if (task.options.inputTips) {
        inputComponents = await this.getInputComponents(task.options.inputTips);
      }
      const res = await this.executeTask({ task, inputComponents });

      this.results.push({
        ...task.result,
        ...res,
      });
    }
    return this.results;
  }

  async executeTask({ task, inputComponents }) {
    console.log(`✨ 正在执行: ${task.options.name}`);
    return await task.run(inputComponents);
  }
}

const { execSync } = require('child_process');

function getGitConfig(field) {
  return execSync(`git config --get ${field}`).toString().trim();
}

try {
  const userName = getGitConfig('user.name');
  const userEmail = getGitConfig('user.email');

  const forbiddenPatterns = /alibaba-inc|alibabapictures/i;

  console.log('账号名', userName);
  console.log('邮箱', userEmail);
  if (forbiddenPatterns.test(userName) || forbiddenPatterns.test(userEmail)) {
    console.error('💔Git用户名或邮箱不符合规范，禁止提交。');
    process.exit(1);
  }

  console.log('🚀Git用户名和邮箱合规，继续提交...');
} catch (error) {
  console.error('💔无法获取Git配置信息:', error.message);
  process.exit(1);
}

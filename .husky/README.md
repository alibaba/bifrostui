### npx: command not found?

1. `where npx`
2. 复制你的 npx 路径到 bin，贴入下面命令行括号处，并执行
3. `echo 'export PATH="[贴入复制内容]/:$PATH"' >> ~/.huskyrc`

DEMO: `echo 'export PATH="/Users/xxx/.nvm/versions/node/v16.20.0/bin/:$PATH"' >> ~/.huskyrc`

# 🔧 Quick Fix Guide

## 问题诊断

您遇到的错误：
1. `__webpack_require__.n is not a function` - 依赖版本不兼容
2. `Event handlers cannot be passed to Client Component props` - 缺少 "use client" 指令

## ✅ 已修复

1. **Button 组件** - 添加了 `"use client"` 指令
2. **依赖版本** - 降级到稳定版本
3. **Next.js 配置** - 添加 recharts transpile

## 🚀 立即修复步骤

### 1. 清理旧的依赖

```bash
cd /Users/hqy/Documents/GitHub/finance

# 删除所有 node_modules
rm -rf node_modules
rm -rf packages/next-app/node_modules

# 删除 yarn.lock（如果存在）
rm -f yarn.lock
rm -f packages/next-app/yarn.lock
```

### 2. 重新安装依赖

```bash
# 确保在项目根目录
cd /Users/hqy/Documents/GitHub/finance

# 使用 yarn 安装
yarn install
```

### 3. 清理 Next.js 缓存

```bash
cd packages/next-app

# 删除 .next 缓存
rm -rf .next

# 重新构建
yarn build
```

### 4. 启动开发服务器

```bash
# 在 packages/next-app 目录
yarn dev

# 或在根目录
cd /Users/hqy/Documents/GitHub/finance
yarn dev
```

## 📋 验证清单

启动后检查：

- [ ] 开发服务器启动成功（http://localhost:3000）
- [ ] 首页正常加载
- [ ] 没有 webpack 错误
- [ ] 没有 "use client" 错误
- [ ] 计算器页面可以访问

## 🔍 如果仍有问题

### 检查 Node 版本

```bash
node --version  # 应该是 v18 或更高
```

如果版本太低：

```bash
# 使用 nvm 升级（如果已安装）
nvm install 18
nvm use 18

# 或使用 Homebrew（macOS）
brew install node@18
```

### 检查 Yarn 版本

```bash
yarn --version  # 应该是 1.22.x
```

### 完全重置项目

如果上述步骤都不行：

```bash
cd /Users/hqy/Documents/GitHub/finance

# 1. 清理所有
rm -rf node_modules packages/*/node_modules
rm -rf .next packages/*/.next
rm -f yarn.lock packages/*/yarn.lock

# 2. 重新安装 yarn（如果需要）
npm install -g yarn@1.22.22

# 3. 重新安装依赖
yarn install

# 4. 启动
yarn dev
```

## 📊 依赖版本说明

### 主要依赖更改

| 包名 | 旧版本 | 新版本 | 原因 |
|------|--------|--------|------|
| next | 15.4.8 | 15.1.4 | 稳定版本，修复 webpack 问题 |
| react | 19.1.0 | 19.0.0 | 稳定版本 |
| recharts | 3.1.0 | 2.13.3 | 兼容性更好 |
| lucide-react | 0.534.0 | 0.462.0 | 稳定版本 |

### 为什么降级？

- **Next.js 15.4.8** 是预发布版本，可能有 bug
- **React 19.1.0** 太新，某些库可能不兼容
- **Recharts 3.x** 是 beta 版本，2.x 更稳定

## 🎯 预期结果

修复后您应该看到：

```bash
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 1.2s
```

浏览器打开 http://localhost:3000 应该看到：
- ✅ 绿色主题的首页
- ✅ Featured Calculators 卡片
- ✅ 无控制台错误

## 💡 开发提示

### 常用命令

```bash
# 开发模式（热重载）
yarn dev

# 生产构建
yarn build

# 运行生产版本
yarn start

# 代码检查
yarn lint
```

### 清理缓存

如果遇到奇怪的错误：

```bash
# 清理 Next.js 缓存
rm -rf packages/next-app/.next

# 清理 node_modules
rm -rf node_modules packages/*/node_modules
yarn install
```

## 🆘 获取帮助

如果问题仍然存在：

1. **检查终端输出** - 复制完整的错误信息
2. **检查浏览器控制台** - 按 F12 查看错误
3. **查看日志文件** - `.next/trace` 目录

### 常见错误及解决方案

**错误：Port 3000 already in use**
```bash
# 杀死占用端口的进程
lsof -ti:3000 | xargs kill -9

# 或使用其他端口
PORT=3001 yarn dev
```

**错误：Cannot find module**
```bash
# 重新安装依赖
yarn install --force
```

**错误：TypeScript errors**
```bash
# 检查 TypeScript 配置
cat packages/next-app/tsconfig.json

# 重新生成类型
cd packages/next-app
yarn build
```

## ✨ 成功标志

当一切正常时，您会看到：

1. **终端输出：**
   ```
   ▲ Next.js 15.1.4
   - Local:        http://localhost:3000
   - Network:      http://192.168.x.x:3000
   
   ✓ Ready in 2.5s
   ```

2. **浏览器：**
   - 首页加载完整
   - 绿色/金色主题显示正确
   - 点击链接正常跳转
   - 计算器页面可以访问

3. **控制台：**
   - 无红色错误
   - 可能有黄色警告（可忽略）

---

**需要更多帮助？** 查看 [README.md](./README.md) 或 [DEPLOYMENT.md](./DEPLOYMENT.md)


# My Blog — 个人博客网站

极简风格个人博客，支持在线管理后台编辑内容。

## 网站结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 近期文章 + 精选作品 |
| 文章 | `/articles/` | 所有文章列表 |
| 文章详情 | `/articles/文章名/` | 单篇文章 |
| 作品 | `/works/` | 设计作品集 |
| 作品详情 | `/works/作品名/` | 单个作品 |
| 关于 | `/about/` | 关于我 |
| 友链 | `/links/` | 友情链接 |
| 管理 | `/admin/` | 🔐 内容管理后台 |

---

## 💻 本地预览 & 内容编辑（立即可用）

### 预览网站

```bash
cd C:\Users\11790\my-blog
npm run dev
```

浏览器打开 **http://localhost:4321** 查看网站。

### 在管理后台编辑内容

需要**两个**终端窗口：

**窗口 1**（网站）：
```bash
cd C:\Users\11790\my-blog
npm run dev
```

**窗口 2**（管理后台后端）：
```bash
cd C:\Users\11790\my-blog
npm run cms
```

然后浏览器打开 **http://localhost:4321/admin/** 进入管理后台。

在管理后台编辑、创建内容 → 保存 → 文件自动更新 → 网站自动刷新！

> 注意：本地编辑功能需要你的电脑已安装 **Git**（https://git-scm.com/download/win）

---

## 🚀 部署指南（只需做一次）

你需要两个免费账号：**GitHub** + **Netlify**。按照下面步骤操作即可。

---

### 第一步：注册 GitHub 账号

1. 打开 https://github.com
2. 点击「Sign up」注册账号（用邮箱即可）
3. 记住你注册的**用户名**和**密码**

---

### 第二步：创建 GitHub 仓库

1. 登录 GitHub 后，点击右上角「+」→「New repository」
2. 仓库名填 `my-blog`（或任何你喜欢的名字）
3. 选择 **Public**（公开）
4. **不要**勾选任何初始化选项（README、.gitignore 都不选）
5. 点击「Create repository」
6. 创建后，GitHub 会显示一个页面，上面有命令行指令。**先不要关掉这个页面。**

---

### 第三步：安装 Git 并上传代码

你的电脑可能没有 Git。先下载安装：
- https://git-scm.com/download/win
- 下载后一路点「Next」安装即可（默认选项不用改）

安装完成后，按下键盘 `Win + R`，输入 `powershell` 回车，然后逐条复制粘贴以下命令：

```bash
# 进入项目文件夹
cd C:\Users\11790\my-blog

# 初始化 Git
git init
git add .
git commit -m "初始化博客"

# 连接你的 GitHub 仓库（把下面 YOUR_NAME 替换成你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_NAME/my-blog.git

# 上传代码
git branch -M main
git push -u origin main
```

上传成功后，刷新 GitHub 页面，你会看到所有文件都出现在上面了。

---

### 第四步：部署到 Netlify

1. 打开 https://www.netlify.com
2. 点击「Sign up」→ 选择「Sign up with GitHub」用 GitHub 账号登录
3. 登录后，点击「Add new site」→「Import an existing project」
4. 选择「GitHub」→ 找到你的 `my-blog` 仓库
5. 在配置页面，**所有选项保持默认**，直接滑到底部点「Deploy site」
6. 等待几分钟，Netlify 会自动构建和部署你的网站

部署完成后，你会看到一个网址，类似 `https://xxxxx-xxxxx-1234.netlify.app`。这就是你的网站地址！

---

### 第五步：开启管理后台

管理后台需要用 Netlify Identity 登录。配置方法：

1. 在 Netlify 网站后台，点击你刚创建的站点
2. 左侧菜单点击「Identity」
3. 点击「Enable Identity」按钮
4. 往下滚动，找到「Registration」→ 改为 **Invite only**
5. 找到「Services」→ 点击「Git Gateway」→「Enable Git Gateway」
6. 再回到「Identity」页面，点击「Invite users」
7. 输入你的邮箱，点击「Send invite」
8. 检查邮箱，点击邀请链接，设置密码

---

### 第六步：登录管理后台

1. 打开 `https://你的网站地址/admin/`
2. 点击「Login with Netlify Identity」
3. 用你的邮箱和设置的密码登录
4. 现在你可以：
   - ✍️ 创建/编辑文章
   - 🎨 添加/编辑设计作品
   - 👤 修改「关于我」页面
   - 🔗 管理友情链接
   - 📷 上传图片

保存后的内容会自动更新到网站（等待 1-2 分钟构建）。

---

## 💻 本地预览（可选）

如果以后想在本地看效果再发布：

```bash
cd C:\Users\11790\my-blog
npm run dev
```

浏览器打开 `http://localhost:4321` 即可预览。

---

## 🎨 自定义

### 修改博客名称
- 标题「My Blog」在 `src/components/Header.astro` 中
- 浏览器标签标题在各页面的 `title` 属性中

### 修改配色
- 打开 `src/styles/global.css`
- 修改 `:root` 中的 CSS 变量（比如把 `--color-accent` 改掉）

### 修改「关于我」内容
- 直接在管理后台 `/admin/` 中编辑更方便
- 或者编辑 `src/data/pages/about.md`

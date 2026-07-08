# My Blog — 个人博客网站

极简风格个人博客，网址：**yuan-blog.netlify.app**

## 网站结构

| 页面 | 路径 |
|------|------|
| 首页 | `/` |
| 文章列表 | `/articles/` |
| 文章详情 | `/articles/文章名/` |
| 设计作品 | `/works/` |
| 作品详情 | `/works/作品名/` |
| 关于我 | `/about/` |
| 友情链接 | `/links/` |

---

## ✏️ 编辑内容（管理后台）

管理后台在你的电脑上本地运行，编辑完后推送到网站。

### 首次使用（只需做一次）

下载 Decap CMS 的 JS 文件到本地：

打开终端（Win+R → 输入 `powershell`），运行：

```bash
curl -o C:\Users\11790\my-blog\public\netlify-cms.js https://unpkg.com/netlify-cms@2.10.192/dist/netlify-cms.js
```

### 每次编辑时的操作

需要**两个终端窗口**同时运行：

**终端 1** — 启动网站预览：
```bash
cd C:\Users\11790\my-blog
npm run dev
```

**终端 2** — 启动管理后台服务：
```bash
cd C:\Users\11790\my-blog
npm run cms
```

然后浏览器打开 **http://localhost:4321/admin/** 

- 左侧菜单选择：文章 / 设计作品 / 关于我 / 友情链接
- 点击「New 文章」创建新文章
- 编辑完成后点「发布」→「保存」
- 内容会自动保存到本地文件，网站也会自动刷新

### 发布到线上

编辑完成后，在第三个终端运行：
```bash
cd C:\Users\11790\my-blog
git add -A
git commit -m "更新内容"
git push
```

等待 1-2 分钟，Netlify 自动构建部署，刷新 **yuan-blog.netlify.app** 就能看到更新。

---

## 🚀 部署说明

网站已部署在 Netlify（yuan-blog.netlify.app），关联 GitHub 仓库 `YuanAurevyn/my-blog`。每次 `git push` 到 main 分支会自动触发部署。

---

## 🎨 自定义设计

### 修改配色
编辑 `src/styles/global.css`，修改 `:root` 中的变量：
```css
--color-bg: #ffffff;       /* 背景色 */
--color-text: #1a1a1a;     /* 文字色 */
--color-accent: #000000;   /* 强调色 */
```

### 修改博客名称
编辑 `src/components/Header.astro`，修改「My Blog」。

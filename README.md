# unplugin-hot-export



Automatically export files with HMR

[![NPM version](https://badge.fury.io/js/unplugin-hot-export.svg)](https://www.npmjs.com/package/unplugin-hot-export)


<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220714/vite-plugin-auto-export-logo.1aoaypaggq5c.png?raw=true' width='200'/>
</p>

## Why ?

When developing, we often need to download some `images` or `svg` from the internet, and when we need to use them, we need export them in `index.ts` file `manually`, this plugin can handle this for you `automatically`.And support HMR 🌈

## 🚀 Features

- 👻 Multiple directory generate support
- 🍁 Auto export files
- 🐥 custom outputDir
- 🍄 Support custom import statement
- ✨ HMR support 
- 🌈 Nest directory generate support
- 🍣 Auto Prefix support


## 📺 Preview

<p align='center'>
<img src='https://git.poker/sudongyuer/image-bed/blob/master/20220717/屏幕录制2022-07-17-11.2ia7q69awd00.gif?raw=true' width='100%'/>
</p>


## 🦄 Usage

### Install

```bash
pnpm add -D unplugin-hot-export
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import { vitePlugin as HotExport } from 'unplugin-hot-export'

export default defineConfig({
  plugins: [HotExport()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import { rollupPlugin as HotExport } from 'unplugin-hot-export'

export default {
  plugins: [HotExport()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
const HotExport = require('unplugin-hot-export')
build({
  plugins: [HotExport.esbuildPlugin()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
const HotExport = require('unplugin-hot-export')
module.exports = {
  /* ... */
  plugins: [HotExport.webpackPlugin()],
}
```

<br></details>

<details>
<summary>NextJs</summary><br>

```ts
// next.config.js
const HotExport = require('unplugin-hot-export')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, _) => {
    config.plugins.push(HotExport.webpackPlugin())
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
```

<br></details>




### Config `export.config.ts`

- targetDir (require) : the directory to export files

- outputDir (optional,default targetDir) : the directory to generate the `index.ts` file to export files

- customImport (optional) : custom the import statement to use in the `index.ts` file 

- depth (optional , default true) : traverse all subdirectories

- autoPrefix (optional , default false) : auto add prefix to the file name. Note that the if you open the customImport option,this option will be ignored

```js
import { defineExportConfig } from 'unplugin-hot-export'
export default defineExportConfig({
  configs: [
    {
      targetDir: './src/assets/images',
    },
    {
      targetDir: './src/assets/img',
      depth: true,
      autoPrefix: true
    },
    {
      targetDir: './src/assets/css',
      outputDir: './src/assets/css',
    },
    {
      targetDir: './src/assets/svgs',
      customImport: (fileName, file) => {
        return `import { ReactComponent as ${fileName} } from '${file}'`
      },
    },
    {
      targetDir: './src/assets/gif',
      customImport: (fileName, file, fileType) => {
        return `import ${fileType}${fileName} from '${file}'`
      },
      depth: true
    },
  ],
})

```

Then start your project
```bash
pnpm run dev
```
## Not Work?

If you are use webstorm, please check the following:

![image-20220717101450402](https://tva1.sinaimg.cn/large/e6c9d24egy1h49pefcb4jj21580u0wi5.jpg)


## Author

sudongyuer email:976499226@qq.com

## 📄 License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)

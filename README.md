https://phenomenal-sherbet-a287d4.netlify.app

### Notes
使用[tailwind css](https://www.tailwindcss.cn/docs/guides/create-react-app)，按照官网安装后报错，`TypeError: match.loader.options.plugins is not a function`。解决： replace "postcss" with "postcssOptions" in craco config<br>

使用[@heroicons/react](https://heroicons.com/), SVG 图标库<br>

图片展示：将img文件夹放于public中。<br>

抽离公共组件Headers、ProjectItem。<br>
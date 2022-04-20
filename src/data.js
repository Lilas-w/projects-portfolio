export const projects = {
    react: [
        {
            title: "Birthday Reminder",
            subtitle: "useState",
            description:
                "使用useState定义people状态加载本地数据，使用map函数渲染列表；设置清空数据的按钮",
            image: "img/birthday.png",
            link: "https://lilas-w.github.io/react-projects/01-birthday-reminder/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/01-birthday-reminder/setup"
        },
        {
            title: "Tours",
            subtitle: "useState useEffect",
            description:
                "使用useEffect请求外部API，渲染列表；单个条目的详情介绍部分设置read more功能",
            image: "img/tours.webp",
            link: "https://lilas-w.github.io/react-projects/02-tours/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/02-tours/setup"
        },
        {
            title: "Reviews",
            subtitle: "useState",
            description:
                "定义index状态，据本地数据的索引、长度，实现展示前一个、后一个、随机一个功能，边界情况返回首项或末项，实现简单轮播图效果",
            image: "img/reviews.webp",
            link: "https://lilas-w.github.io/react-projects/03-reviews/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/03-reviews/setup"
        },
        {
            title: "Accordion",
            subtitle: "useState",
            description:
                "使用useState，根据showInfo决定是否渲染本地答案数据，设置button切换showInfo状态，button随之切换；使用react-icons",
            image: "img/accordin.png",
            link: "https://lilas-w.github.io/react-projects/04-accordion/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/04-accordion/setup"
        },
        {
            title: "Menu",
            subtitle: "useState",
            description: "使用useState，定义menuItems、categories状态，用filter函数、set结构，按条件渲染本地数据",
            image: "img/menu.png",
            link: "https://lilas-w.github.io/react-projects/05-menu/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/05-menu/setup"
        }, {
            title: "Tabs",
            subtitle: "useState useEffect",
            description: "使用useEffect和fetch请求外部API，定义loading、jobs、value状态，点击姓名渲染对应数据",
            image: "img/tabs.png",
            link: "https://lilas-w.github.io/react-projects/06-tabs/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/06-tabs/setup"
        }, {
            title: "Slides",
            subtitle: "useState useEffect setInterval",
            description: "定义people、index状态，渲染本地数据，在Reviews项目的基础上，使用useEffect和setInterval实现自动轮播图效果",
            image: "img/slides.png",
            link: "https://lilas-w.github.io/react-projects/07-slider/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/07-slider/setup"
        }, {
            title: "Lorem lpsum",
            subtitle: "useState",
            description: "使用useState，定义count、text状态，渲染form结构，设置提交表单按钮，阻止默认提交，据用户提交数字渲染对应数量段落",
            image: "img/lorem.png",
            link: "https://lilas-w.github.io/react-projects/08-lorem-ipsum/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/08-lorem-ipsum/setup"
        }, {
            title: "Color Generator",
            subtitle: "useState useEffect setTimeout",
            description: "定义color、error、list状态，据输入渲染颜色列表，错误处理；点击颜色复制hex并显示提示语，使用useEffect和setTimeout使提示定时消失",
            image: "img/color.png",
            link: "https://lilas-w.github.io/react-projects/09-color-generator/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/08-lorem-ipsum/setup"
        }, {
            title: "Grocery Bud",
            subtitle: "useState useEffect localStorage",
            description: "购物清单。可添加、改变、删除物品；物品列表可存储到本地；输入为空，添加、改变、删除成功，全部清空，有对应提示",
            image: "img/grocery.png",
            link: "https://lilas-w.github.io/react-projects/10-grocery-bud/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/10-grocery-bud/setup"
        }, {
            title: "Navbar",
            subtitle: "useState useEffect useRef",
            description:
                "响应式导航栏；小屏时可开关；用useRef定义代表links列表之父盒子的linksContainerRef，和代表links列表的linksRef，动态获取导航栏高度",
            image: "img/navbar.png",
            link: "https://lilas-w.github.io/react-projects/11-navbar/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/11-navbar/setup"
        }, {
            title: "Stripe Submenus",
            subtitle: "useContext useRef useState useEffect",
            description: "点击导航栏选项，显示下拉菜单；鼠标经过导航栏各按钮时，下拉菜单可随鼠标移动",
            image: "img/stripe.png",
            link: "https://lilas-w.github.io/react-projects/12-sidebar-modal/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/13-stripe-submenus/setup"
        },
        {
            title: "Cart",
            subtitle: "useReducer useContext useState useEffect",
            description: "实现购物车。具有清空购物车、增删单品、计算总数量、总价格功能。使用useContext+useReducer优化性能",
            image: "img/cart.png",
            link: "https://lilas-w.github.io/react-projects/14-cart/setup/build/index.html",
            github: "https://github.com/Lilas-w/react-projects/tree/main/14-cart/setup"
        },
        {
            title: "Movie Search",
            subtitle: "useReducer useState useEffect axios",
            description: "请求外部API，使用useState useEffect useReducer函数实现一个具有电影搜索功能的网站，单击“HOOKED”可刷新页面",
            image: "img/movie.png",
            link: "https://lilas-w.github.io/React-hooks-projects/movie-search/build/index.html",
            github: "https://github.com/Lilas-w/React-hooks-projects/tree/main/movie-search"
        }
    ],
    js: [
        {
            title: "Drum Kit",
            subtitle: "transition transform <audio>",
            description: "点击键盘播放声音。监听键盘点击事件，触发则执行playSound函数；用<audio>标签规定对应声音；制作点击动画",
            image: "img/drum.png",
            link: "https://lilas-w.github.io/javascript-30/01%20-%20JavaScript%20Drum%20Kit/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/01%20-%20JavaScript%20Drum%20Kit"
        },
        {
            title: "JS and CSS Clock",
            subtitle: "setInterval transition transform Date",
            description: "实时时钟效果。利用setInterval(setDate, 1000)每秒取得当前时间，计算角度；用tranform变更时钟样式",
            image: "img/clock.png",
            link: "https://lilas-w.github.io/javascript-30/02%20-%20JS%20and%20CSS%20Clock/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/02%20-%20JS%20and%20CSS%20Clock"
        },
        {
            title: "Update CSS Variables with JS",
            subtitle: "CSSvariables CSS-filter",
            description: "即时滤镜。可调整内边距、模糊程度、边框颜色。用CSS variable定义CSS变量，dataset和setProperty实时修改；CSS滤镜filter",
            image: "img/scoped.png",
            link: "https://lilas-w.github.io/javascript-30/03%20-%20CSS%20Variables/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/03%20-%20CSS%20Variables"
        }, {
            title: "Flex Panel Gallery",
            subtitle: "transition transform flex",
            description: "图片展示面板。点击小图以弹跳动画展开图片，文字飞入，其他图片位移，再次点击时复原。使用flex布局。",
            image: "img/flex.png",
            link: "https://lilas-w.github.io/javascript-30/05%20-%20Flex%20Panel%20Gallery/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/05%20-%20Flex%20Panel%20Gallery"
        }, {
            title: "Type Ahead",
            subtitle: "fetch RegExp filter",
            description: "搜索实时展示。用fetch获取json数据存入数组；监测输入，使用正则和filter比对出待显示条目",
            image: "img/type.png",
            link: "https://lilas-w.github.io/javascript-30/06%20-%20Type%20Ahead/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/06%20-%20Type%20Ahead"
        }, {
            title: "Fun with HTML5 Canvas",
            subtitle: "<canvas> ",
            description: "按住鼠标绘制不同色彩粗细线条。getContext申请2D画布，设置颜色strokeStyle、线条lineJoin、lineCap、lineWidth",
            image: "img/canvas.png",
            link: "https://lilas-w.github.io/javascript-30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/08%20-%20Fun%20with%20HTML5%20Canvas"
        }, {
            title: "Hold Shift and Check Checkboxes",
            subtitle: "querySelectorAll forEach shiftKey checkbox",
            description: "用shift+鼠标左键完成连续区间选取。监听shiftKey和类型为checkbox的input框状态，决定是否勾选",
            image: "img/checkbox.png",
            link: "https://lilas-w.github.io/javascript-30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes"
        }, {
            title: "Custom Video Player",
            subtitle: "<video>",
            description: "使用HTML5的<video>标签，实现播放/暂停、快进/快退、音量大小、速率切换、全屏功能",
            image: "img/videoplayer.png",
            link: "https://lilas-w.github.io/javascript-30/11%20-%20Custom%20Video%20Player/index.html",
            github: "https://github.com/Lilas-w/javascript-30/tree/main/11%20-%20Custom%20Video%20Player"
        }
    ]
};
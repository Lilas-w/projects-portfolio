export const projects = [
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
            "使用useEffect获取外部API，渲染列表；单个条目的详情介绍部分设置read more功能",
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
        description: "使用useEffect和fetch获取外部API，定义loading、jobs、value状态，点击姓名渲染对应数据",
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
        title: "cart",
        subtitle: "useReducer useContext useState useEffect",
        description: "实现购物车。具有清空购物车、增删单品、计算总数量、总价格功能。使用useContext+useReducer优化性能",
        image: "img/cart.png",
        link: "https://lilas-w.github.io/react-projects/14-cart/setup/build/index.html",
        github: "https://github.com/Lilas-w/react-projects/tree/main/14-cart/setup"
    }
];
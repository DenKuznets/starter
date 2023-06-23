import { DashboardOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
    {
        key: "dashboards",
        path: `${APP_PREFIX_PATH}/dashboards`,
        title: "sidenav.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        isGroupTitle: true,
        submenu: [
            {
                key: "dashboards-default",
                path: `${APP_PREFIX_PATH}/dashboards/default`,
                title: "sidenav.dashboard.default",
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: [],
            },
        ],
    },
];

const mainNavTree = [
    {
        key: "main",
        path: `${APP_PREFIX_PATH}/main`,
        title: "Основные",
        // icon: DashboardOutlined,
        breadcrumb: false,
        isGroupTitle: true,
        submenu: [
            {
                key: "main-dashboard",
                path: `${APP_PREFIX_PATH}/main/dashboard`,
                title: "Дашборд",
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "main-catalogue",
                path: `${APP_PREFIX_PATH}/main/catalogue`,
                title: "Каталог",
                icon: ShoppingCartOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: "main-catalogue-merch",
                        path: `${APP_PREFIX_PATH}/main/catalogue/merch`,
                        title: "Товары",
                        // icon: ShoppingCartOutlined,
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "main-catalogue-category",
                        path: `${APP_PREFIX_PATH}/main/catalogue/category`,
                        title: "Категория",
                        // icon: ShoppingCartOutlined,
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "main-catalogue-collection",
                        path: `${APP_PREFIX_PATH}/main/catalogue/collection`,
                        title: "Коллекции",
                        // icon: ShoppingCartOutlined,
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "main-catalogue-combo",
                        path: `${APP_PREFIX_PATH}/main/catalogue/combo`,
                        title: "Комбо",
                        // icon: ShoppingCartOutlined,
                        breadcrumb: true,
                        submenu: [],
                    },
                ],
            },
        ],
    },
];

const navigationConfig = [
    // ...dashBoardNavTree,
    ...mainNavTree,
];

export default navigationConfig;

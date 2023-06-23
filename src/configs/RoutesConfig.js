import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfig";

export const publicRoutes = [
    {
        key: "login",
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() =>
            import("views/auth-views/authentication/login")
        ),
    },
    {
        key: "register",
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() =>
            import("views/auth-views/authentication/register")
        ),
    },
    {
        key: "forgot-password",
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() =>
            import("views/auth-views/authentication/forgot-password")
        ),
    },
];

export const protectedRoutes = [
    {
        key: "dashboard.default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() =>
            import("views/app-views/dashboards/default")
        ),
    },
    {
        key: "main",
        path: `${APP_PREFIX_PATH}/main`,
        component: React.lazy(() => import("views/app-views/main")),
    },
    {
        key: "main.dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        component: React.lazy(() => import("views/app-views/main/dashboard")),
    },
    {
        key: "main.catalogue",
        path: `${APP_PREFIX_PATH}/main/catalogue`,
        component: React.lazy(() => import("views/app-views/main/catalogue")),
    },
    {
        key: "main.catalogue.merch",
        path: `${APP_PREFIX_PATH}/main/catalogue/merch`,
        component: React.lazy(() =>
            import("views/app-views/main/catalogue/merch/Merch")
        ),
    },
    {
        key: "main.catalogue.collection",
        path: `${APP_PREFIX_PATH}/main/catalogue/collection`,
        component: React.lazy(() =>
            import("views/app-views/main/catalogue/collection/Collection")
        ),
    },
    {
        key: "main.catalogue.combo",
        path: `${APP_PREFIX_PATH}/main/catalogue/combo`,
        component: React.lazy(() =>
            import("views/app-views/main/catalogue/combo/Combo")
        ),
    },
    {
        key: "main.catalogue.category",
        path: `${APP_PREFIX_PATH}/main/catalogue/category`,
        component: React.lazy(() =>
            import("views/app-views/main/catalogue/category/Category")
        ),
    },
    {
        key: "main.clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        component: React.lazy(() => import("views/app-views/main/clients")),
    },
    {
        key: "main.clients.list",
        path: `${APP_PREFIX_PATH}/main/clients/list`,
        component: React.lazy(() =>
            import("views/app-views/main/clients/list/List")
        ),
    },
    {
        key: "main.clients.group",
        path: `${APP_PREFIX_PATH}/main/clients/group`,
        component: React.lazy(() =>
            import("views/app-views/main/clients/group/Group")
        ),
    },
];

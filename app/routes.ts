import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/characters/:characterId", "routes/character.tsx"),
] satisfies RouteConfig;

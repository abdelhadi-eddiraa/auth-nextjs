/***
 * an array of routes that are accessible to the public
 * these routes do not reqquire authentication
 * @type {string[]}
 */
export const publicRoutes=[
    "/"
];


/***
 * an array of routes that are use for auth
 * these routes  will redirect logged in users to / settings
 * @type {string[]}
 */
export const authRoutes=[
 "/auth/login",
 "/auth/register",
 "/auth/error"
]


/***
 * the prefix for api auth routes
 * routes taht start with this prefix are used for api auth purpose
 * @type {string}
 */
export const apiAuthPrefix="/api/auth";

/***
 * the default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT="/settings";


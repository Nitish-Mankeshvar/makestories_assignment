import React from "react";

// Lazy loading all components
const AuthGuard = React.lazy(() => import("../components/AuthGuard"));
const EditUser = React.lazy(() => import("../components/EditUser"));
const LoggedUser = React.lazy(() => import("../components/LoggedUser"));
const SignUp = React.lazy(() => import("../components/SignUp"));
const Login = React.lazy(() => import("../components/Login"));

// Defining routes
export default [
  {
    path: "/edituser/:id",
    Component: EditUser,
    guard: AuthGuard,
  },
  {
    path: "/user",
    Component: LoggedUser,
    guard: AuthGuard,
  },
  {
    path: "/login",
    Component: Login,
    guard: null,
  },
  {
    path: "/",
    Component: Login,
    guard: null,
  },
  {
    path: "/signup",
    Component: SignUp,
    guard: null,
  },
];

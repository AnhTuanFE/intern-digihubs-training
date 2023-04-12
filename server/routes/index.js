import userRouter from "./user.route.js";

const routes = (app) => {
  app.use("/api/v1/users", userRouter);
};
export default routes;

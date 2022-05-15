import { ISwagger } from "./Interface";
import swaggerRoutes, { swaggerTags } from "./swagger-routes";

const swagger: ISwagger = {
  openapi: "3.0.0",
  info: {
    title: "Atlas",
    description: "Essa é uma documentacao sobre a Atlas API.",
    version: "1.0.0",
  },
  tags: swaggerTags,
  paths: { ...swaggerRoutes.users },
};

export default swagger;

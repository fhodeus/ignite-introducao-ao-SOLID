interface ISwaggerInfo {
  title: string;
  description: string;
  version: string;
}

interface IProperts {
  type: string;
}

interface ISchemaProperts {
  [key: string]: IProperts;
}

interface ISchemaExample {
  [key: string]: string;
}

interface ISchemaItems {
  type: string;
  properties: ISchemaProperts;
}

interface IJsonSchema {
  type: string;
  properties?: ISchemaProperts;
  items?: ISchemaItems;
  example: ISchemaExample;
}

interface IAplicationJson {
  schema: IJsonSchema;
}

interface IAplicationBody {
  "aplication/json": IAplicationJson;
}

interface IBodyMethod {
  content: IAplicationBody;
}

interface IResponseBody {
  description: string;
  content?: IAplicationBody;
}

interface IResponseMethod {
  [key: string]: IResponseBody;
}

interface IParametersSchema {
  type: string;
  format: string;
  minimum: number;
}

interface IParameters {
  name: string;
  in: string;
  required: boolean;
  description: string;
  schema: IParametersSchema;

  default?: string;
  enum?: Array<string>;
}

interface IMethodSwagger {
  tags: Array<string>;
  summary: string;
  description: string;

  parameters?: Array<IParameters>;

  requestBody?: IBodyMethod;
  responses: IResponseMethod;
}

interface IPathMethodSwagger {
  [key: string]: IMethodSwagger;
}

interface IPathSwagger {
  [key: string]: IPathMethodSwagger;
}

interface ITagSwagger {
  name: string;
  description: string;
}

interface ISwagger {
  openapi: string;
  info: ISwaggerInfo;
  tags: Array<ITagSwagger>;
  paths: IPathSwagger;
}

export { ISwagger, IPathMethodSwagger, ITagSwagger };

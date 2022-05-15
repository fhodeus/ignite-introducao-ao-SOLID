import { IPathMethodSwagger, ITagSwagger } from "swagger/Interface";

const users: IPathMethodSwagger = {
  post: {
    tags: ["users"],
    summary: "Cria um novo usuario.",
    description: "Cria um novo usuario.",
    requestBody: {
      content: {
        "aplication/json": {
          schema: {
            type: "object",
            properties: {
              user: {
                type: "string",
              },
              email: {
                type: "string",
              },
            },
            example: {
              name: "Rocketseat",
              email: "oi@rocketseat.com.br",
            },
          },
        },
      },
    },
    responses: {
      "201": { description: "Operacao realizada com sucesso." },
      "400": { description: "Email ja esta sendo Utilizado" },
    },
  },
  get: {
    tags: ["users"],
    summary: "Retorna todos os usuario.",
    description: "Somente usuarios <code>ADMIN</code> pode acessar.",
    parameters: [
      {
        name: "user_id",
        in: "header",
        required: true,
        description: "",
        schema: { type: "string", format: "uuid", minimum: 1 },
      },
    ],
    responses: {
      "200": {
        description: "Operacao realizada com Sucesso.",
        content: {
          "aplication/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                },
              },
              example: {
                name: "Rocketseat",
                email: "oi@rocketseat.com.br",
              },
            },
          },
        },
      },
      "400": {
        description: "Usuario sem permissao ou Usuario nao encontrado.",
      },
    },
  },
};

const getUser: IPathMethodSwagger = {
  get: {
    tags: ["users"],
    summary: "Retorna um usuario especifico.",
    description: "",
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        description: "ID do usuario",
        schema: { type: "string", format: "uuid", minimum: 1 },
      },
    ],
    responses: {
      "200": {
        description: "Operacao realizada com Sucesso.",
        content: {
          "aplication/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                },
              },
              example: {
                name: "Rocketseat",
                email: "oi@rocketseat.com.br",
              },
            },
          },
        },
      },
      "404": {
        description: "Usuario nao encontrado.",
        content: {
          "aplication/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  erro: {
                    type: "string",
                  },
                },
              },
              example: {
                error: "User not Found.",
              },
            },
          },
        },
      },
    },
  },
};

const postAdmin: IPathMethodSwagger = {
  patch: {
    tags: ["users"],
    summary: "Torna admin um usuario.",
    description: "",
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        description: "",
        schema: { type: "string", format: "uuid", minimum: 1 },
      },
    ],
    responses: {
      "200": { description: "Operacao realizada com sucesso." },
      "404": { description: "Usuario nao encontrado." },
    },
  },
};

export const userTags: Array<ITagSwagger> = [
  {
    name: "users",
    description: "Gerenciamento de usuários",
  },
];

export default {
  "/users": users,
  "/users/{user_id}": getUser,
  "/users/{user_id}/admin": postAdmin,
};

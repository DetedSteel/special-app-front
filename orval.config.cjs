module.exports = {
  "special-backend": {
    input: {
      target: "./src/shared/api/config/special-backend.swagger.json",
    },
    output: {
      target: "./src/shared/api/generated/query",
      schemas: "./src/shared/api/generated/model",
      prettier: true,
      client: "react-query",
      mode: "tags",
      override: {
        mutator: {
          path: "./src/shared/api/config/baseRequest.ts",
          name: "baseApiRequest",
        },
      },
    },
  },
};

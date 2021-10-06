export const dbConnection = {
  url: process.env.CONNECTION_STRING || process.env.CONNECTION_STRING_TEST,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

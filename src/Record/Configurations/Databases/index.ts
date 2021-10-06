export const dbConnection = {
  url: `mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=Records&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

const ErrorHandler = (err, res, next) => {
  if (err) {
    return res.status(err.status).json({
      code: err.code,
      msg: err.message
    });
  }
  next();
}

export = ErrorHandler;

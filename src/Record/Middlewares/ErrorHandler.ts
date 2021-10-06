const ErrorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(err.status).json({
      code: err.code,
      msg: err.message
    });
  }
  next();
}

export = ErrorHandler;

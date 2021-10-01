class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const _errorHandler = async (err, res) => {
  const { statusCode, message } = await err;
  res.status(statusCode).json({ message: message });
};

class SavingDataError extends ErrorHandler {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}

class ResourceNotFound extends ErrorHandler {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}

class UpdateFailed extends ErrorHandler {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}

class RemoveFailed extends ErrorHandler {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}

const Errors = {
  ErrorHandler: ErrorHandler,
  errorHandler: _errorHandler,
  SavingDataError: SavingDataError,
  ResourceNotFound: ResourceNotFound,
  UpdateFailed: UpdateFailed,
  RemoveFailed: RemoveFailed,
};

module.exports = Errors;

/*
    // saving data error 406
    // resource or searchd query not found 405
    // update failed 407
    // RemoveFailed 408
    
*/

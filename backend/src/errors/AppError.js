class AppError extends Error {
  constructor(message, status) {
    super(message);

    this.name = "App Error";
    this.status = status;
    this.message = message;
  }
}

export default AppError;

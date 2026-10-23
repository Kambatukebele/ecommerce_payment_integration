import AppError from "../errors/AppError.js";

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    console.log(
      `AppError happel: message: ${error.message}, code: ${error.statusCode}`,
    );

    return res.status(error.statusCode).json({
      status: false,
      message: error.message,
      statusCode: error.statusCode,
    });
  }
  console.log("Something went wrong");
  return res.status(500).json({
    status: false,
    message: "Internal error, Something went wrong!",
    statusCode: 500,
  });
};

export default errorHandler;

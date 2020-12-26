const errorHandler = (err, req, res) => {
  if (err)
    console.error(err.message, err.stack[0] + err.stack[1] + err.stack[2]);
};

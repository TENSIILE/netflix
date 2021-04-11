export const ensure = <T>(
  argument: T | undefined,
  message = 'Произошла ошибка, argument является undefined!'
): T => {
  if (!argument) {
    throw new TypeError(message);
  }

  return argument;
};

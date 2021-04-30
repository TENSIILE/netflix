export const ensure = <T>(
  argument: T | undefined,
  message = 'Произошла ошибка, argument является undefined!'
): T => {
  if (!argument) {
    throw new TypeError(message);
  }

  return argument;
};

interface CustomObj {
  [key: string]: string;
}

export const renamePropsObj = (
  obj: CustomObj[] | CustomObj,
  objNames: CustomObj = {
    poster_path: 'posterPath',
    release_date: 'releaseDate',
    vote_average: 'voteAverage',
    vote_count: 'voteCount',
  }
): void => {
  const rewriteObj = (object: CustomObj): void => {
    for (const key in object) {
      for (const keyName in objNames) {
        if (key.toString() === keyName.toString()) {
          object[objNames[keyName]] = object[key];
          delete object[key];
        }
      }
    }
  };

  if (!Array.isArray(obj)) return rewriteObj(obj);

  for (const i of obj) rewriteObj(i);
};

// @flow
import path from 'path';

export default class DirectoryAlreadyExistsError extends Error {
  constructor(directory: string) {
    super(
      `Cannot initialize new project because directory ".${
        path.sep
      }${directory}" already exists.`,
    );
  }
}

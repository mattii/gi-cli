import list from './list';
import checkout from './checkout';
import merge from './merge';
import unknown from './unknown';

export const selectCommand = (command: string) => {
  const commandUndefined = command == null || command.length === 0;

  if (commandUndefined || command === 'list') {
    return list;
  }

  if (command === 'merge') {
    return merge;
  }

  // try to parse command as number for issue detection / checkout
  const issueNumber = parseInt(command, 10);
  if (isNaN(issueNumber) || issueNumber < 1) {
    return unknown;
  }

  return checkout;
};

export { default as list } from './list';
export { default as checkout } from './checkout';
export { default as merge } from './merge';
export { default as unknown } from './unknown';

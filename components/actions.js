export const ACTION = 'ACTION';

export function action (data) {
  return {
    type: ACTION,
    data
  };
}

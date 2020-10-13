export function classNames(...names: (string | null | undefined)[]): string {
  return names.reduce((result: string, name) => {
    const separator = result === '' ? '' : ' ';

    if (typeof name === 'string' && name.trim() !== '') {
      return `${result}${separator}${name}`;
    }

    return result;
  }, '');
}

export const cn = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter((value): value is string => Boolean(value)).join(" ");

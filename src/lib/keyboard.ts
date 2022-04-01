export const disposition = [
	['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
	['backspace', 'w', 'x', 'c', 'v', 'b', 'n', 'enter'],
] as const;
export const keys = disposition.flatMap((x) => x);
export type Key = typeof keys[number];

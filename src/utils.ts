export class ErrorWithStatusCode extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const compareArrays = (a: any, b: any) => {
  if (a.length > b.length) return false;
  // Convert arrays to Sets and compare
  const field = new Set(a);
  const reqField = new Set(b);
  return [...field].every((element) => reqField.has(element));
};

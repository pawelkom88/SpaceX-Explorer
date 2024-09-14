// branded type ?

export function getYouTubeID(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function transformString(string: string): string {
  return string.replace(/(^|_)(\w)/g, (_, p1, p2) => (p1 ? ' ' : '') + p2.toUpperCase());
}

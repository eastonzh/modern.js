import path from 'path';
import { normalizeToPosixPath } from './path';

export const getPathWithoutExt = (filename: string) => {
  const extname = path.extname(filename);
  return filename.slice(0, -extname.length);
};

export const getRouteId = (componentPath: string, routesDir: string) => {
  const relativePath = normalizeToPosixPath(
    path.relative(routesDir, componentPath),
  );
  const id = getPathWithoutExt(relativePath);
  return id;
};
import { glob } from 'glob';
import path from 'path';

const categories = ['components', 'paths'] as const;

export const getPaths = (category: typeof categories[number]) => {
  return glob.sync(`../../packages/strum-react/src/${category}/**/*.docs.mdx`, {
    cwd: process.cwd(),
    absolute: true,
  });
};

export const getAllPaths = () => {
  return glob.sync(`../../packages/strum-react/src/**/*.docs.mdx`, {
    cwd: process.cwd(),
    absolute: true,
  });
};

export const getComponentName = (pathname: string) => {
  const componentName = path.basename(pathname, '.mdx');
  return componentName.replace(path.extname(componentName), '');
};

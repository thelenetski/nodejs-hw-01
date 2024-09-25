import path from 'node:path';

// приклад для побудови шляху із його частин
const pathToWorkDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToWorkDir, 'src/db/', 'db.json');

const fs = require('fs');
const path = require('path');

const domains = ['do-admin', 'do-cinema', 'do-sport', 'do-hospital'];

domains.forEach((domain) => {
  const backendDir = path.join('apps', domain, 'backend');
  if (fs.existsSync(backendDir)) {
    // Update or create project.json
    const projPath = path.join(backendDir, 'project.json');
    const projContent = { name: `@dosomething/${domain}-backend` };
    fs.writeFileSync(projPath, JSON.stringify(projContent, null, 2) + '\n');
    console.log(`Updated ${domain}-backend`);
  }
});

// Also update e2e project names if they exist
const e2eDomains = [
  {
    dir: 'apps/do-cinema/backend-e2e',
    name: '@dosomething/do-cinema-backend-e2e',
  },
  {
    dir: 'apps/do-sport/backend-e2e',
    name: '@dosomething/do-sport-backend-e2e',
  },
  {
    dir: 'apps/do-hospital/backend-e2e',
    name: '@dosomething/do-hospital-backend-e2e',
  },
];

e2eDomains.forEach((item) => {
  if (fs.existsSync(item.dir)) {
    const projPath = path.join(item.dir, 'project.json');
    const projContent = { name: item.name };
    fs.writeFileSync(projPath, JSON.stringify(projContent, null, 2) + '\n');
    console.log(`Updated e2e for ${item.name}`);
  }
});

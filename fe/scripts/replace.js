const fs = require('fs');

(() => {
  let content = fs
    .readFileSync('./__mocks__/mock.types.generated.ts')
    .toString();

  content = content.replace(
    "'process.env.NEXT_PUBLIC_BFF_URL'",
    '`${process.env.NEXT_PUBLIC_BFF_URL}`'
  );

  fs.writeFileSync('./__mocks__/mock.types.generated.ts', content);
})();

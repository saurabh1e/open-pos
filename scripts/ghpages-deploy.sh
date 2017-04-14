#!/bin/bash

git checkout gh-pages
git reset --hard master

echo 'Replace api endpoint with https://coderin.me/api/v1/'

cat <<'EOF' >> api.config.ts
export const MOCK_API: string = "https://coderin.me/api/v1/";
EOF

mv src/config/api.config.ts api.config.ts.default
mv api.config.ts src/config/api.config.ts

ng build --base-href --env=prod

echo 'Created and Checked out gh-pages branch'


cp -r dist/* .
echo 'Copied dist/ directory into root dir'

echo 'Tracking files'
git add -A .
echo 'Commiting files'
git commit -a -m 'gh-pages update'
echo 'Pushing files into gh-pages branch'
git push origin gh-pages --force
git checkout master

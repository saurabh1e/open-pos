#!/bin/bash


git branch -f gh-pages
git checkout gh-pages

echo 'Replace api endpoint with https://open-point-of-sale.herokuapp.com/api/v1/'

cat <<'EOF' >> api.config.ts
export const MOCK_API: string = "https://open-point-of-sale.herokuapp.com/api/v1/";
EOF

mv src/config/api.config.ts api.config.ts.default
mv api.config.ts src/config/api.config.ts

ng build --base-href /open-pos-frontend/

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

#!/bin/bash

rm -rf fonts
cp -r node_modules/bootstrap/dist/fonts .

cat node_modules/bootstrap/dist/css/bootstrap.min.css > styles.css && \
cat node_modules/datatables.net-bs/css/*.css >> styles.css && \
cat node_modules/datatables.net-fixedheader-bs/css/*.css >> styles.css && \
cat index.css >> styles.css && \
sed -i _tmp -e 's/\.\.\/fonts\//chrome-extension:\/\/__MSG_@@extension_id__\/fonts\//g' styles.css && \
rm styles.css_tmp

browserify -t [ babelify --presets [ es2015 ] ] -g uglifyify index.js > content_script.js

rm -f csv2table.zip
zip csv2table.zip background.js content_script.js icon.png manifest.json styles.css
zip csv2table.zip -r fonts

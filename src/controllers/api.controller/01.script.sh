for f in $(cat ./00.list.txt); 
do 
  echo "const $f = require('./api.controller/$f');" 
done
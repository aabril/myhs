for f in $(cat ./00.list.txt); 
do 
  echo "module.exports = $f"
done
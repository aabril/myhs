for f in $(ls); 
do
  if [[ $f == *.js ]]
  then
    ITEMNAME=$(echo $f | cut -d'.' -f1)
    echo $ITEMNAME
    echo "module.exports = $ITEMNAME" >> $f
  fi
done
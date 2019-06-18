for item in $(cat "./00.list.txt")
do
  echo $item
  touch $item.js
done
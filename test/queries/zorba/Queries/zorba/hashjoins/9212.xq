<karteikasten>{
for $book in doc("books.xml")//book
let $anzahl:=count($book/author)
order by $anzahl descending
return
<gruppe anzahl="{$anzahl}">{
  for $book in doc("books.xml")//book
  where count($book/author)=$anzahl
  return $book
}</gruppe>
}</karteikasten>
export const getFilteredBooks= (text, book) => 
{
const bookSearch = text.toLowerCase(); 

return book.filter(book => {

    const {title} = book; 
    const {name} = book.authors[0]; 
   return  title.toLowerCase().includes(bookSearch) ||name.toLowerCase().includes(bookSearch)
})
}
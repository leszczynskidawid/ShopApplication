import BasketDataListBook from "components/molecules/BasketDataListBook";
import styled from "styled-components";
import BasketDataListFooter from "components/molecules/BakstDataListFooter";



const StyledDataListUl = styled.ul`
background-color:white;
display:flex; 
flex-direction:column;
opacity:0.9;
color:black; 
position:absolute; 
border:2px solid orange; 
left:-200px;
min-width:200px;

`
function BasketDataListBooks({books}) {

    const item = books.slice(0,3).map(book =><BasketDataListBook book= {book} key={book.id}></BasketDataListBook>)
    return (  
<StyledDataListUl>
{item}
<BasketDataListFooter count = {books.length}/>
</StyledDataListUl>
    );
}

export default BasketDataListBooks;
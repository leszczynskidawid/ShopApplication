
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ICON } from "../icons/icons";
import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import { deleteBookToBasketCart } from "assets/redux/reduxCartBasket/ActionCartBasket";
import Modal from "components/atoms/Modal";
import { notifySucces } from "./Toasts";
import { useNavigate } from "react-router-dom";


const WrapperImgDataCell = styled.div`
  width: 90px;
  height: 90px;
  padding: 10px;
  margin-bottom: 10px;
`;
const StyledButton = styled.button`
  padding: 10px;
  text-align: center;
  margin: auto;
  background-color: transparent;
  color: white;
  border-color: red;
  background-color: red;
  transition: 0.2s linear;
  &:hover {
    color: grey;
    background-color: white;
  }
`;

function TableBasketItem() {
  const books = useSelector(state => state.reducerBasketCart.bookToBuy);

  const [classActive, setClassActive] = useState("");
  const dipsatchBasketBooks = useDispatch();
  const [dialogWidnow, setDialogWindow] = useState("");
  const [summaryOrder, setSummaryOrder] = useState(0);

  const reference = useRef();
  useEffect(() => {

  setSummaryOrder(sumaryPriceOrder())
  }, [books]);

  

  const sumaryPriceOrder  = () => {
   
  return books.map(book => book.price).reduce((a, b) => a + b, 0);
   
  };

  const handleDeleteBookFromBasket = e => {
    if (e.target.id === "1") {
      setClassActive("No");
    } else if (e.target.id === "2") {
      dipsatchBasketBooks(deleteBookToBasketCart(reference.current.id));

      notifySucces(`usunięto`);
      setClassActive("no");
    }
  };

  const handleChange = state => {
    setClassActive("active");
    reference.current = state;
    setDialogWindow(reference.current.title);
  };

  const columns = useMemo(
    () => [
      {
        name: "ACTION",
        cell: row => (
          <StyledButton onClick={() => handleChange(row)}>
            {DELETE_ICON}
          </StyledButton>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        maxWidth: "20px",
      },
      {
        name: "ID",
        selector: row => row.id,
        maxWidth: "10px",
      },

      {
        name: "IMAGE",
        selector: row => (
          <WrapperImgDataCell>
            <img src={row.formats["image/jpeg"]} alt="" />
          </WrapperImgDataCell>
        ),
        maxWidth: "20px",
      },
      {
        name: "TITLE",
        selector: row => row.title,
      },
      {
        id: "price",
        name: "PRICE",
        selector: row => `${row.price} zł`,
      },
    ],
    [books]
  );


  return (
    <>
      <Modal
        modalButtonActions={handleDeleteBookFromBasket}
        className={classActive}
        itemName={dialogWidnow}
      />
      <DataTable
        title="koszyk"
        columns={columns}
        data={books}
        onRowSelected={handleChange}
      />
      <div>
        <span>suma zamówienia: {summaryOrder} zł </span>
      </div>
     
    </>
  );
}
export default TableBasketItem;

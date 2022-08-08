import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModelContext";
import { IProduct } from "../models/products";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Product } from "../components/Product";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { ProductSearch } from "../components/ProductSearch";
import { ProductFilter } from "../components/ProductFilter";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/actions/productActions";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 5;

export function ProductsPage() {
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
   // addProduct(product);
  }
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch, page]);

  const { products, loading, error, count} = useAppSelector(state => state.product)

  const pageCount = Math.ceil(count/ITEMS_PER_PAGE);
  const pageChangeHandler = ({ selected }: { selected: number}) => {
    console.log('selected', selected)
    setPage(selected);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <ProductSearch/>
      <ProductFilter/>

      { loading && <Loader/> }
      { error && <ErrorMessage error={ error }/> }
      { products.map(product => <Product product={product} key={product.id}/>) }

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={page}
        previousLabel="<"
        pageClassName="py-1 px-2 border mr-2"
        containerClassName="flex"
        activeClassName="bg-gray-500 text-white"
      />

      { modal && <Modal title="Create New Product" onClose={close}>
          <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >+</button>
    </div>
  );
}

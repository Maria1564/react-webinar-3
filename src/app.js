import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  //показывать ли модалку
  const [showModal, setShowModal] = useState(false)

  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item)=>{
      store.addItem(item)
    }, [store]),

    getTotalProducts: useCallback(()=>{
      return store.getTotalProducts()
    }, [cart]),

    onDeleteProduct: useCallback((code)=>{
      store.deleteProduct(code)
    }, [store])
  }

  return (
    <>
    <PageLayout>
      <Head title='Магазин' isModal={false}/>
      <Controls getTotalProducts={callbacks.getTotalProducts} setShowModal={setShowModal}/>
      <List list={list} onAddItem={callbacks.onAddItem}/>
    </PageLayout>
    {showModal? <Modal cart={cart} setShowModal={setShowModal} onDeleteProduct={callbacks.onDeleteProduct}/>: null}
    </>
  );
}

export default App;

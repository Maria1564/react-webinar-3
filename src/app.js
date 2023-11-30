import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
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
    }, [cart])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls getTotalProducts={callbacks.getTotalProducts}/>
      <List list={list} onAddItem={callbacks.onAddItem}/>
    </PageLayout>
  );
}

export default App;

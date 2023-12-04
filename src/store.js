import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;

    console.log(this.state.cart)
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товаров в коризну
   */
  addItem(item) {
    let isHave = false

    this.state.cart.length && this.state.cart.forEach(elem =>{
      if(item.code === elem.code) isHave = true
    })

    if(!isHave) {
      item.count = 1
      this.setState({
        ...this.state,
        cart: [...this.state.cart, item],
        total: this.state.total + 1,
        sum: this.state.sum + item.price
      })
    }else {
      this.setState({
        ...this.state,
        cart: this.state.cart.map(elem => {
          if(elem.code == item.code) return {...elem, count: elem.count+1}

          return elem
        }),
        sum: this.state.sum + item.price
      })
    }
  };


  /**
   * Удаление товара из корзины
  */
  deleteProduct(item) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(elem => elem.code !== item.code ),
      total: this.state.total - 1,
      sum: this.state.sum - (item.count  * item.price)
    })
  }
}

export default Store;

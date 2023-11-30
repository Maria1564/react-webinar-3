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
        cart: [...this.state.cart, item]
      })
    }else {
      this.setState({
        ...this.state,
        cart: this.state.cart.map(elem => {
          if(elem.code == item.code) return {...elem, count: elem.count+1}

          return elem
        })
      })
    }
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Получение общего количества уникального товара и суммы
   */
  getTotalProducts() {
    let sum = 0 // сумма

    this.state.cart.length && this.state.cart.forEach(item => {
      sum = sum + (item.count * item.price)
    })

    return {total: this.state.cart.length, sum} //total - количество уникального товара
  }

  /**
   * Удаление товара из корзины
  */
  deleteProduct(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(item => item.code !== code )
    })
  }
}

export default Store;

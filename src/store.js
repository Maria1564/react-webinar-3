/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния

    if(this.state.list.length) {
      const arrCodes = this.state.list.map(item=> item.code)
      this.code = Math.max(...arrCodes) + 1
    }else  {
      this.code = 1
    }
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
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: this.code, title: 'Новая запись', totalSelect: 0}]
    })
    this.code+=1
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        // убираем выделение у других записей
        if(item.selected && item.code !== code) item.selected = !item.selected

        if (item.code === code) {
          item.selected = !item.selected;

          //если запись выделили, а не убрали выделение, то +1 к количеству выделений этой записи
          if(item.selected){
            item.totalSelect += 1
          }
        }
        return item;
      })
    })
  }
}

export default Store;

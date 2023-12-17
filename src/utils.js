
/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}


export function  createHierarchy(options) {
  let newArr = []
  options.forEach((item,index) => {
    if(!item.parent && newArr.includes(item) == false) {
      newArr.push({...item, pos: 0})
      searchChild(options, newArr, item._id, 0)
    }
    })
  return newArr
}

function searchChild(options, newArr, id, pos) {
  options.forEach(item => {
    newArr.forEach(el => {
      if(item.parent && item.parent._id == id && el.pos == pos && !newArr.some(el => el._id == item._id)){
        newArr.push({...item, pos: pos+1})
        searchChild(options, newArr, item._id, pos+1)
      }
    })
  })
}
export const state = () => ({
  currencies: [],
  firstCurrency: null,
  count: null,
  resultCalculator: "...",
  imagesCalculator: [{
      file: "img-1.jpg",
      name: "first image"
    },
    {
      file: "img-2.jpg",
      name: "second image"
    },
    {
      file: "img-3.jpg",
      name: "third image"
    },
    {
      file: "img-4.png",
      name: "fourth image"
    },
  ],
  listCalculator: [{
      id: "text-1",
      text: "incididunt ut labore et dolore magna aliqua"
    },
    {
      id: "text-2",
      text: "incididunt ut labore et"
    },
    {
      id: "text-3",
      text: "incididunt ut labore et dolore"
    },
    {
      id: "text-4",
      text: "labore et dolore"
    },
    {
      id: "text-5",
      text: "incididunt ut"
    },
    {
      id: "text-6",
      text: "incididunt ut labore et dolore"
    },
    {
      id: "text-7",
      text: "incididunt ut labore"
    },
  ],
})

export const mutations = {
  updateCurrencies(state, value) {
    state.currencies = value;
  },
  updateCurrency(state, value) {
    state.firstCurrency = value;
  },
  updateCount(state, value) {
    state.count = value;
  },
  updateResultCalculator(state, value) {
    state.resultCalculator = value;
  },
}

export const getters = {
  listCurrencies(state) {
    return state.currencies;
  },
  firstCurrency(state) {
    return state.firstCurrency;
  },
  count(state) {
    return state.count;
  },
  resultCalculator(state) {
    return state.resultCalculator;
  },
  imagesCalculator(state) {
    return state.imagesCalculator;
  },
  listCalculator(state) {
    return state.listCalculator;
  }
}

export const actions = {
  async getListCurrencies({
    commit
  }) {
    await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => {
        if (response.status !== 200) {
          console.log("Статус ошибки:", response.status);
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        if (data.Valute) {
          commit("updateCurrencies", Object.values(data.Valute));
        }
      })
      .catch((e) => {
        console.log("Ошибка:", e);
      });
  },
}

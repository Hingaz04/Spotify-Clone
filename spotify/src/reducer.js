export const initialState = {
  user: null,
  plalist: [],
  playing: false,
  item: null,
  token:
    "BQBkgg1mbNHILvHI43LnLuodqAv3N9i5SNuR8xpdw2Kfs24kezrCA0B1MifyzMB3Lt5VHgdbMiZslMT1xn7r9gGEb2N8e5cNcT6_9KNhRoHq0p3arE4wFqrqb4_-eWoIzyvm5l-rd9ijdPPimxlA-VrrHa962jrQ2ZM6Toz4x3D3obDuoUrPcEagClowroM1Dos_RCv8Bcp6JSWR4HdU",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;

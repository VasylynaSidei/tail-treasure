/* eslint-disable no-case-declarations */
export const userReducer = (state, action) => {
  // console.log("from reducer:", action.payload.user);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          ...action.payload.user,
          bonusPoints: action.payload.user.bonusPoints || 0,
        },
        isAccountVerified: true,
        isAdmin: action.payload.user?.isAdmin || false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAccountVerified: false,
        isAdmin: false,
      };
    case "SET_USER_COUNT":
      return {
        ...state,
        userCount: action.payload,
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        user: {
          ...state.user,
          history: action.payload,
        },
      };
    case "USE_POINTS":
      const newBonusPoints = state.user.bonusPoints - action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          bonusPoints: newBonusPoints >= 0 ? newBonusPoints : 0,
        },
      };
    case "UPDATE_BONUS_POINTS":
      return {
        ...state,
        user: {
          ...state.user,
          bonusPoints: action.payload >= 0 ? action.payload : 0,
        },
      };
    default:
      return state;
  }
};

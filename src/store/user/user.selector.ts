import { rootReducer } from "../root-reducer"
export const selectCurrentUser = (state: ReturnType<typeof rootReducer>) => state.user.user;
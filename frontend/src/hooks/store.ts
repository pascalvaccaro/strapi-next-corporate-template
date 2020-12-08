import { useMemo } from "react";
import { AppState, initializeStore } from "../store";


export const useStore = (initialState: AppState) =>
  useMemo(() => initializeStore(initialState), [initialState]);

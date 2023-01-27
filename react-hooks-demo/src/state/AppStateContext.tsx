import { createContext, useContext, Dispatch, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../interfaces/DragItem";
import { withInitialState } from "../utils/withInitialState";
import { Action } from "./actions";
import { appStateReducer } from "./appStateReducer";
import { save } from "../api";

type Task = {
  id: string
  text: string
}

type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
  draggedItem: DragItem | null
}

type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

type AppStateProviderProps = {
  children?: React.ReactNode
  initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(({ children, initialState }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
  const { draggedItem, lists } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }
  useEffect(() => {
    save(state)
  }, [state])
  return (
    <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
)

export const useAppState = () => {
  return useContext(AppStateContext)
}

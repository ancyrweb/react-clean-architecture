import { Provider } from "react-redux";
import { createAppStore } from "../../modules/core/redux";

const store = createAppStore();

export const ReduxWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

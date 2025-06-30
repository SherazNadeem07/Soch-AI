// "use client";
// import { Provider } from "react-redux";
// import store from "../Store/store";

// export default function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }
// Providers.jsx
"use client";
import { Provider } from "react-redux";
import store, { persistor } from "../Store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

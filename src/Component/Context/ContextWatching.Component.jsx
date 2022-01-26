import React from "react";
export const CreateWatchingContext = React.createContext();

export const ContextWatching = ({children}) => {
  const ArrayWatching = [
    { name: "keren", text: "very good", numberView: 15 },
    { name: "gila", text: "nice", numberView: 22 },
    { name: "dan", text: "dont like it", numberView: 99 },
    { name: "dana", text: "woww", numberView: 8 },
  ];

  return (
    <CreateWatchingContext.Provider value={ArrayWatching}>
      {children}
    </CreateWatchingContext.Provider>
  );
};

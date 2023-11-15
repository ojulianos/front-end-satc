import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ChatForm from "./routes/ChatForm";
import ChatMessage from "./routes/ChatMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ChatForm />,
      },
      {
        path: "/chat",
        element: <ChatMessage />,
      },
    ],
  },
]);

function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App

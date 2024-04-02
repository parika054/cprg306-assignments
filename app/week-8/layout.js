import { AuthContextProvider } from "../app/week-10/_utils/auth-context";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;
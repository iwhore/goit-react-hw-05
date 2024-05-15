import Navigation from "../Navigation/Navgation";

export default function Layout({ children }) {
    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
}
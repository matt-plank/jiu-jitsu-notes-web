import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";

const Guide = ({ account }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar username={account.username} />

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Guide;

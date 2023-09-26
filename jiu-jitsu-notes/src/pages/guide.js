import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Guide = ({ account }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar selected="/guide" username={account.username} />

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Guide;

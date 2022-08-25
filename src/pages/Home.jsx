const Home = ({ isActive }) => {
  return (
    <>
      <section className={`credit home overlay ${isActive ? "active" : ""}`}>
        <div className="section-container">
          <h1>HOME</h1>
        </div>
      </section>
    </>
  );
};

export default Home;

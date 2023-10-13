import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="container row">
      <div className="col-9">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-3 row align-content-start ps-3">
        <h2>Status</h2>
        <button class="btn btn-secondary mb-2 text-start">
          Import Existing Content
        </button>
        <button class="btn btn-secondary mb-2 text-start">
          Import from Commons
        </button>
        <button class="btn btn-secondary mb-2 text-start">
          Choose Home Page
        </button>
        <h4>To Do</h4>
        <hr />
      </div>
    </div>
  );
}
export default Home;

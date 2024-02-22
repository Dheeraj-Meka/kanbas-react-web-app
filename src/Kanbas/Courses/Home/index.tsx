import ModuleList from "../Modules/List";
import StatusList from "../Status/List";


function Home() {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row">
      <h2>Home</h2>
      <ModuleList />
      <StatusList />
    </div>
  );
}
export default Home;
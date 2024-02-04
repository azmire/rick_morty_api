import "../index.css";
function Header({ props }) {
  return (
    <header>
      <div className="header">
        <form>
          <input
            onChange={(e) => props(e.target.value)}
            className="searchbox"
            id="searchbox"
            type="text"
            placeholder="Search.."
          ></input>
        </form>
      </div>
    </header>
  );
}

export default Header;

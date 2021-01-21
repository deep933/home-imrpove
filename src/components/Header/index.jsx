import './index.css'

const Header = ({ handleNewProject, handleLogout }) => {
  return (
    <header id="navbar">
      <div className="logo">
        <h1>Home Improvement</h1>
      </div>

      <div className="actions flex-row">
        <button className="primary" onClick={handleNewProject}>
          New Project
        </button>
        <button className="secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header

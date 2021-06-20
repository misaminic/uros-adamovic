const MenuCircle = ({ menuElementVisibility, menuClickHandler }) => {
  {
    menuElementVisibility ? (
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={() => menuClickHandler()}>
            <i className="fas fa-times"></i>
          </button>
          <button id="open" onClick={() => menuClickHandler()}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    ) : null;
  }
};

export default MenuCircle;

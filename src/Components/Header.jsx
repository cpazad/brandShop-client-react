const Header = () => {
  return (
    <div className="bg-white py-5">
      <label className="swap text-6xl">
        <div className="swap-on">🥵</div>
        <div className="swap-off">🥶</div>
      </label>
      <label className="swap swap-active text-6xl">
        <div className="swap-on">🥳</div>
        <div className="swap-off">😭</div>
      </label>
    </div>
  );
};

export default Header;

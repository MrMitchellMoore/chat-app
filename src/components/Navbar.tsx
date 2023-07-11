const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

export function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.heading}>ChatApp</div>
    </div>
  );
}

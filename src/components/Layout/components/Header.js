import { publicRoutes } from "../../../routes";

function Header() {
  return <div>
    <h2>Header</h2>
    {publicRoutes.map((el, idx) => {
      return <li key={idx}><a href={el.path}>{el.path.slice(1) || 'home'}</a></li>
    })}
  </div >;
}

export default Header;
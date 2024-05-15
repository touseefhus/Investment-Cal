import HeaderImg from "../Assets/pngwing.com (1).png";
export default function Header() {
  return (
    <>
      <header id="header">
        <img src={HeaderImg} alt={HeaderImg} />
        <h1>Invesment Calculator</h1>
      </header>
    </>
  );
}

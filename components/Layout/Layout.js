import Navigation from "../Navigation/Navigation";

function Layout(props) {
  return (
    <>
      <main className="w-full mx-auto pr-6 pl-4 max-w-3 max-w-[1920px]">
        <Navigation />
        {props.children}
      </main>
    </>
  );
}

export default Layout;

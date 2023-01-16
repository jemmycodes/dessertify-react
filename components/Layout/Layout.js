import Navigation from "../Navigation/Navigation";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main className="w-full mx-auto bg-pageMainColor pr-6 pl-4 max-w-3 max-w-[1920px]">
        {props.children}
      </main>
    </>
  );
}

export default Layout;

export function Header() {
  return (
    <>
      <header className="w-full items-center justify-center flex mx-auto z-20 py-6 select-none bg-primary-100  shadow-lg">
        <div className="container relative max-w-[1280px] flex mx-auto items-center justify-center px-2 overflow-hidden">
          <h1 className="text-primary-900 text-3xl lg:text-4xl font-semibold">
            Random User
          </h1>
        </div>
      </header>
    </>
  );
}

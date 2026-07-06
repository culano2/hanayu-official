export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div>
          <h1 className="text-3xl tracking-[0.25em] text-white">
            HANAYU
          </h1>

          <p className="text-xs tracking-[0.3em] text-amber-400">
            FROM HUAYU ISLAND
          </p>
        </div>

        <nav className="hidden gap-8 text-sm text-white lg:flex">

          <a href="#">HOME</a>

          <a href="#">STORY</a>

          <a href="#">OCEAN</a>

          <a href="#">FISHING</a>

          <a href="#">PRODUCT</a>

          <a href="#">RECIPE</a>

          <a href="#">GALLERY</a>

          <a href="#">NEWS</a>

          <a href="#">CONTACT</a>

        </nav>

      </div>
    </header>
  );
}

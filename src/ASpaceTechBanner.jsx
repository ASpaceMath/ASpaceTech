const ASpaceTechBanner = () => {
  return (
    <header className="bg-asm_dgreen text-asm_white">
      <div className="ast-header-container my-0 mx-auto flex flex-wrap py-2 sm:w-full sm:flex-nowrap">
        <h1 className="my-0 mx-auto w-full text-center text-4xl sm:ml-1 sm:w-3/4 sm:grow sm:text-left">
          ASpaceTech
        </h1>
        <div className="ast-sm-container flex w-full justify-evenly sm:w-1/4 sm:max-w-xs">
          <div className="ast-sm-icon m-auto text-center">
            <a
              href="https://www.youtube.com/channel/UC7S64e02bYzFT01JlYj0g3g"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-youtube" aria-hidden="true"></span>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <div className="ast-sm-icon m-auto text-center">
            <a
              href="https://www.instagram.com/aspacemath/"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="fa-brands fa-instagram"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <div className="ast-sm-icon m-auto text-center">
            <a
              href="https://www.tiktok.com/@aspacemath"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-tiktok" aria-hidden="true"></span>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-asm_lbrown"></div>
    </header>
  );
};

export default ASpaceTechBanner;

import Swal from "sweetalert2";
import useDownloader from "react-use-downloader";
import { useEffect } from "react";

const Hero = () => {
  const { download, elapsed } = useDownloader();

  const cvUrl = "/download/Haris_Maulana_-_Full_Stack_Developer_-_CV.pdf";
  const cvName = "Haris_Maulana_-_Full_Stack_Developer_-_CV.pdf";
  const clickDownload = ()=> {
    Swal.fire({
      icon: "success",
      text: 'Thank You For Downloading my CV',
      showConfirmButton: false,
      timer: 1500,
    });
    download(cvUrl, cvName)
  }

  return (
    <>
      <header className="flex w-screen h-screen flex-col justify-center items-center custom-image bg-cover bg-fixed relative">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-1" />
        <h1 className="custom-header-style text-5xl tracking-widest max-md:text-3xl text-white z-10 cursor-default">
          Haris Maulana
        </h1>
        <button
          className="btn p-3 mt-4 text-white border z-10 hover:scale-110 duration-300 ease-in-out font-bold custom-button-download"
          onClick={clickDownload}
        >
          Download CV
        </button>
      </header>
      <main className="flex w-screen h-screen justify-center items-center p-10">
          <div className="card h-auto w-1/2">
            Card
          </div>
      </main>
    </>
  );
};

export default Hero;

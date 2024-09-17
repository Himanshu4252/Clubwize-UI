import Image from "next/image";
import logo from "../../../../public/assets/Component 4.png";


function Success() {

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg- p-10 rounded-lg">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Reset Successfully <span>🥳</span>
        </h2>
        <p className="text-center font-normal text-sm text-gray-400 mb-8">
        Your password has been successfully reset,<br />
        Click below to login magically.
        </p>

       
          <a href="/onboarding">
            <button
              className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Login with clubwize
            </button>
          </a>
      </div>
    </div>
  );
}

export default Success;

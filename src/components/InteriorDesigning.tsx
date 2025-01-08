import React from "react";

const InteriorDesigning: React.FC = () => {
  return (
    <div className="bg-[#D3D3D3]  flex flex-col items-center p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Interior Design</h1>
        <p className="text-black mb-6">
          Kitchen Interior - Let us help you design your kitchen. Leave the
          worry of mixing and matching furniture behind. Set up your space
          confidently by purchasing the complete look for a seamless experience.
        </p>
        <button className="bg-black h-11 w-28 text-white text-xs rounded-xl mb-6">
          Know More
        </button>
        <div className="flex justify-center">
          <img
            className="w-[993px]"
            src="https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__"
            alt="Kitchen Interior"
          />
        </div>
      </div>
    </div>
  );
};

export default InteriorDesigning;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">ARTIFICIAL BLOG KEKW</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            impedit omnis veniam quam, laudantium beatae eligendi assumenda nam
            hic voluptates!
          </p>
          <p>Artificial Blog KEKW All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Ale</p>
          <p className="my-5">Niezły</p>
          <p>Blog</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Phone</p>
          <p>123-123-123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

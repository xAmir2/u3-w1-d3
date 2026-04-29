const Footer = function () {
  return (
    <p
      className="text-center m-0 py-3 fs-5"
      style={{ backgroundColor: "#000000", color: "white" }}
    >
      &copy; The Library of Doom - {new Date().getFullYear()}
    </p>
  );
};

export default Footer;

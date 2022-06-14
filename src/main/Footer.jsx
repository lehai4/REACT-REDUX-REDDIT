const Footer = ({ setIsOpen, isOpen }) => {
  return (
    <footer>
      <div className="footer-title" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;

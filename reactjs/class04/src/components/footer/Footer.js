
export default function Footer() {
  return (
    
  <footer>

  <div className="container">

    <div className="wrapper">

      <a href="#" className="footer-logo">
        <img src={require("../../assets/images/logo-light.png")} alt="SimpleBlog Logo" width="150" className="logo-light" />
      </a>

      <p className="footer-text">
        Learn about Web accessibility, Web performance, and Database management.
      </p>

    </div>

    <div className="wrapper">

      <p className="footer-title">Quick Links</p>

      <ul>

        <li>
          <a href="#" className="footer-link">Advertise with us</a>
        </li>

        <li>
          <a href="#" className="footer-link">About Us</a>
        </li>

        <li>
          <a href="#" className="footer-link">Contact Us</a>
        </li>

      </ul>

    </div>

    <div className="wrapper">

      <p className="footer-title">Legal Stuff</p>

      <ul>

        <li>
          <a href="#" className="footer-link">Privacy Notice</a>
        </li>

        <li>
          <a href="#" className="footer-link">Cookie Policy</a>
        </li>

        <li>
          <a href="#" className="footer-link">Terms Of Use</a>
        </li>

      </ul>

    </div>

  </div>

  <p className="copyright">
    &copy; Copyright 2024 <a href="#">SimpleBlog</a>
  </p>

</footer>

  )
}

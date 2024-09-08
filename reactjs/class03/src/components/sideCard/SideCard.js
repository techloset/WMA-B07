
export default function SideCard(props) {
  return (
    
    <div className="contact">

    <h2 className="h2">{props?.data?.title}</h2>

    <div className="wrapper">

        <p>
          {props?.data?.text}
        </p>

        <ul className="social-link">

            <li>
                <a href="#" className="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                </a>
            </li>

            <li>
                <a href="#" className="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
            </li>

            <li>
                <a href="#" className="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
            </li>

        </ul>

    </div>

</div>
  )
}

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <i>
            <img src="/logo.svg" alt="logo" />
          </i>
          <div>
            <p>
              <span>
                We are on a mission to open up language to everyone, crafted by
                expert humans, powered by technology, and efficiently delivered.
              </span>
            </p>
            <small>© Company Name · VAT 323323</small>
          </div>
        </div>
        {/*	
        <div>
					<ul>
						<li><Link href="">Contact Us</Link></li>
						<li><Link href=""></Link></li>
						<li><Link href=""></Link></li>
					</ul>
				</div>
        */}
        <div>
          <div>
            <select />
          </div>
          <div>
            <select />
          </div>
          <p>
            <i></i>
            <Link href="tel:(+82) 10-9160-1590">(+82) 10-9160-1590</Link>
          </p>
          <p>
            <i></i>
            <Link href="mailto:amoallim15@gmail.com">amoallim15@gmail.com</Link>
          </p>
          <p>
            <Link href="#">
              <i></i>
            </Link>
            <Link href="#">
              <i></i>
            </Link>
            <Link href="#">
              <i></i>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

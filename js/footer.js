document.getElementById("footer").innerHTML = `
    <div class="container-lg padding-medium text-white">
      <div class="row ">
        <div class="col-lg-4 my-4 ">
          <div class="footer-menu ">
            <a class="navbar-brand" href="index.html">
              <img src="images/logo-futer.png" class="logo img-fluid">
            </a>
            <p class="text-white mt-4">Mesto gde svaki trenutak postaje uspomena.
            </p>
            <ul class="info list-unstyled mt-4">

            </ul>
            <div class="social-links mt-4">
              <ul class="d-flex  list-unstyled gap-2 m-0">
                <li class="social">
                  <a href="#">
                    <iconify-icon class="social-icon" icon="ri:facebook-fill"></iconify-icon>
                  </a>
                </li>
                <li class="social">
                  <a href="#">
                    <iconify-icon class="social-icon" icon="ri:instagram-fill"></iconify-icon>
                  </a>
                </li>
                <li class="social">
                  <a href="#">
                    <iconify-icon class="social-icon" icon="ri:tiktok-fill"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 my-4 ">
          <div class="footer-menu">
            <h6 class="text-uppercase text-white fw-bold  mb-4">Izdvajamo</h6>
            <ul class="menu-list list-unstyled">
              <li class="menu-item">
                <a href="index.html" class="footer-link">Početna</a>
              </li>
              <li class="menu-item">
                <a href="aboutus.html" class="footer-link">O nama</a>
              </li>
              <li class="menu-item">
                <a href="gallery.html" class="footer-link">Galerija </a>
              </li>
              <li class="menu-item">
                <a href="#" class="footer-link">Usluge</a>
              </li>
              <li class="menu-item">
                <a href="contact.html" class="footer-link">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 my-4 ">
          <div class="footer-menu">
            <h6 class="text-uppercase text-white fw-bold  mb-4">Kontakt</h6>
            <ul class="info list-unstyled mt-4">
              <li class="clock text-capitalize mb-2 align-items-center">
                <svg class="text-white me-1" width="18" height="18">
                  <use xlink:href="#clock"></use>
                </svg>00:00 - 24:00
              </li>
              <li class="location text-capitalize mb-2 align-items-center">
                <svg class="text-white me-1" width="18" height="18">
                  <use xlink:href="#location"></use>
                </svg>Zrenjaninski Put 84
              </li>

              <li class="phone text-capitalize mb-2 align-items-center">
                <svg class="text-white me-1" width="18" height="18">
                  <use xlink:href="#phone"></use>
                </svg>060 7171153
              </li>
              <li class="email text-capitalize mb-2 align-items-center">
                <svg class="text-white me-1" width="18" height="18">
                  <use xlink:href="#email"></use>
                </svg>newluxevent@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
`;
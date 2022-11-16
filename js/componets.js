//Componentes repetitivos

//barra Social
social = document.getElementById('social');
social.innerHTML = ' <div class="social row"><ul><li><a href="#" class="icon-facebook" ></a></li><li><a href="#" class="icon-twitter" ></a></li><li><a href="#" class="icon-linkedin" ></a></li><li><a href="#" class="icon-github" ></a></li><li><a href="#" class="icon-mail" ></a></li></ul></div>';

//Menu de navegacion.
navegacion = document.getElementById('nav');
navegacion.innerHTML = '<nav class="navbar navbar-expand-lg bg-light m-1"><div class="container-fluid"><a class="navbar-brand" href="index.html"><span class="icon-home" ></span> Home</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-menu3"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="contenido1.html">Ética y Deontología</a></li> <!--Active se le colocara a la pagina--><li class="nav-item"><a class="nav-link" href="contenido2.html">Códigos de Conducta Ética</a></li><li class="nav-item"><a class="nav-link" href="#">Códigos Deontológicos</a></li><li class="nav-item"><a class="nav-link ">Leyes, Normas, Reglamentos y Resoluciones</a></li><li class="nav-item"><a class="nav-link ">Casos Prácticos</a></li></ul></div></div></nav>';

//footer , esto se hara por fragciones 
//let desarrollado = '<div class="col-md col-sm-12"><div class="card text-center" id="card"><div class="card-header">Desarollado Por:</div><div class="card-body"><div class="row"><p> Lazaro Marin - +584141843003 </p></div><div class="row"><p>Carlos Bermudez - +584123575980</p></div><div class="row"><p>Moises N. - +584128544910</p></div></div></div></div>';

//let compatible = '<div class="col-md col-sm-12"><div class="card text-center" id="card"><div class="card-header">Compatible con:</div><div class="card-body "><p class="card-tex icon-opera fs-2 "> OPERA</p><p class="card-tex icon-chrome fs-2 "> CHROME</p><p class="card-tex icon-firefox fs-2 "> FIREFOX</p></div></div></div>';

//let mapa = '<div class="col-md  col-sm-12""><div class=" card text-center" id="cardMap"><div class="card-header">Nuestra Universidad</div><div class="card-body p-2"><iframesrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.3277693917992!2d-63.86850215947801!3d10.995548416648562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318dd48668b061%3A0x44706c911fed8284!2sUniversidad%20de%20Oriente!5e0!3m2!1ses!2sve!4v1667358580051!5m2!1ses!2sve"width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div>';

//footer = document.getElementById('footer');
//footer.innerHTML = desarrollado + compatible;

//Barra Final
barraEnd = document.getElementById('barraEnd');
barraEnd.innerHTML = '<div class="row mt-2 text-center justify-content-center " id="barrita"><div class="col m-1 mt-2 text-start "><a class="linkUDO" href="#"> Universidad De Oriente</a></div><div class="col  mt-2 text-end"><p>Guatamare - Venezuela</p></div></div>';

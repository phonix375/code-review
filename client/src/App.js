import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <html>

      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <title>Projects - Code Reviews.</title>
      </head>

      <body style="background: url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png'), #465765;">
          <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white" style="color: rgb(33, 37, 41);background: linear-gradient(90deg, #c3e7ff 12%, #003f54 100%);opacity: 0.95;height: 95px;margin-bottom: 95px;">
              <div class="container-fluid"><a class="navbar-brand" href="#" style="font-weight: bold;font-size: 30px;color: rgb(0,63,84);">Code Reviews.</a><button data-bs-toggle="collapse" data-bs-target="#navcol-1" class="navbar-toggler"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse d-flex justify-content-end" id="navcol-1">
                      <ul class="navbar-nav">
                          <li class="nav-item"></li>
                          <li class="nav-item"></li>
                          <li class="nav-item"></li>
                      </ul>
                      <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link active" href="#"></a></li>
                          <li class="nav-item"><a class="nav-link active" href="#"></a></li>
                      </ul><button class="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#signup" style="background: rgba(255,255,255,0);">Log In</button><button class="btn btn-primary d-flex" type="button" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</button>
                  </div>
              </div>
          </nav>
          <div class="container-fluid" style="padding-right: 0;padding-left: 0;padding-top: 95px;">
              <div role="dialog" tabindex="-1" class="modal fade" id="signup">
                  <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header" style="background: #c3e7ff;">
                              <h4>Sign In</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body" style="background: #edf6ff;">
                              <form>
                                  <div class="form-group mb-3">
                                      <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input type="email" class="form-control" required placeholder="Email" /></div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input type="password" class="form-control" required placeholder="Password" /></div>
                                  </div>
                                  <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Log in</button></div>
                              </form>
                              <hr style="background-color: #bababa;" />
                              <p class="text-center">Or <a class="text-decoration-none" href="#">Forget password</a></p>
                              <p class="text-center">Don&#39;t have an account?  <a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</a></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div role="dialog" tabindex="-1" class="modal fade" id="signin">
                  <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header" style="background: #c3e7ff;">
                              <h4 style="color: #003f54;">Create Account</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body" style="background: #edf6ff;">
                              <form class="mt-4">
                                  <div class="form-group mb-3">
                                      <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-user-o"></i></span><input type="text" class="form-control" required placeholder="Full Name" /></div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input type="email" class="form-control" required placeholder="Email" /></div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input type="password" class="form-control" required placeholder="Password" /></div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <div class="form-check"><input type="checkbox" class="form-check-input" id="formCheck-1" required checked /><label class="form-check-label border rounded" for="formCheck-1">I agree all the terms and conditions.</label></div>
                                  </div>
                                  <div class="form-group mb-3"><button class="btn btn-primary btn-lg border rounded-pill" style="width: 100%;" type="button">Sign Up</button></div>
                              </form>
                              <hr style="background-color: #bababa;" />
                              <p class="text-center">Already have an Account? <a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Log In</a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <main class="page projects-page">
              <section class="features-blue" style="padding: 5px 5px 5px;background: rgb(0,63,84);color: rgb(255, 255, 255);">
                  <div class="container" style="padding: 0px 0px 5px 5px;">
                      <div class="intro">
                          <h2 class="text-center">Welcome</h2>
                          <p class="text-center">This is a site designed and created to match experienced developers with others who need to have their code reviewed, debugged ect.  </p>
                      </div>
                      <div class="row features">
                          <div class="col-sm-6 col-md-4 item"><i class="fa fa-code icon"></i>
                              <h3 class="name">New to coding ?</h3>
                              <p class="description">Often new developers get stuck with their code not working and spend hours trying to troubleshoot. with this platform you set the price you want to pay. Experienced devs can apply to the job, you choose who you feel is best suited for the current project.</p>
                          </div>
                          <div class="col-sm-6 col-md-4 item"><i class="fa fa-folder-open-o icon"></i>
                              <h3 class="name"><strong>Experienced Developers</strong> </h3>
                              <p class="description">For those experienced developers this platform is perfect for you. Working with and troubleshooting other developers code with keep you engaged and also allow you to make money. You apply to jobs you feel suit your skills best.</p>
                          </div>
                          <div class="col-sm-6 col-md-4 item"><i class="fa fa-check-square-o icon"></i>
                              <h3 class="name"><strong>Quality Control</strong></h3>
                              <p class="description">Once a job is done and the agreed upon work is complete. The customer is able to give a thorough review of the dev who they hired. this will result in a rating for the devs as our form of quality control. </p>
                          </div>
                      </div>
                  </div>
              </section>
              <section class="portfolio-block projects-cards" style="border-style: none;">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image1.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image2.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image3.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image4.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image5.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                              <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="nature/image6.jpg" alt="Card Image" /></a>
                                  <div class="card-body">
                                      <h6><a href="#">Lorem Ipsum</a></h6>
                                      <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
          <footer class="page-footer" style="color: rgb(255,255,255);background: #003f54;padding: 20px 0px 5px;border-style: none;border-color: rgb(255,255,255);">
              <div class="container">
                  <div class="links" style="color: rgb(255,255,255);"><a href="#" style="color: rgb(195,231,255);">About Us</a><a href="#" style="color: #c3e7ff;">Contact us</a><a href="#" style="color: #c3e7ff;border-color: #c3e7ff;">Terms and Service</a></div>
                  <div class="social-icons"><a href="#" style="border-width: 2px;color: rgb(255,255,255);"><i class="icon ion-social-facebook"></i></a><a href="#" style="border-width: 2px;border-color: rgb(255,255,255);"><i class="icon ion-social-instagram-outline"></i></a><a href="#" style="color: rgb(255,255,255);border-width: 2px;"><i class="icon ion-social-twitter" style="color: #ffffff;"></i></a></div>
              </div>
          </footer>
      </body>

</html>
    </div>
  );
}

export default App;

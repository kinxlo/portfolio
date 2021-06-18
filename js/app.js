// this is the dynamic content for each link or list item
// about,
// contact,
// skill

// =================
// This is the most disorganized JS i have ever written!
// =================

const navLists = document.querySelectorAll('.nav-menu li')

const projectsBtns = document.querySelectorAll('.CTA')
const sectionTwo = document.querySelector('.section-two')
const skillDescription = document.querySelector('.skill-description')

const display = (page) => {
  const screen = document.querySelector('.screen')
  screen.innerHTML = page
}

runEntranceAnimation()

// ======================================================================
// html strings

const HOME = `
<div class="main-container">
                <!-- INTRODUCTION -->
                <div class="main-text introduction">
                    <div class="border">
                        <small>&lt;body&gt;</small>
                        <div style="padding-left:1rem">
                            <div class="">
                                <div>
                                    <small>&lt;p&gt;</small>
                                    <h6 style="padding-left:1rem">Hello!, i'm</h6>
                                    <small>&lt;/p&gt;</small>
                                    <div class="name jumbo-name">
                                        <small id="small">&lt;h1&gt;</small>
                                        <div style="padding-left:1rem">
                                            <div>
                                                <h1>Kingsley</h1>
                                            </div>
                                            <div class="second-name">
                                                <h1>Solomon</h1>
                                                <!-- <div class="hyphen"></div> -->
                                            </div>
                                        </div>
                                        <small id="small">&lt;/h1&gt;</small>
                                    </div>
                                    <small>&lt;p&gt;</small>
                                    <h6 style="padding-left:1rem">your</h6>
                                    <small>&lt;/p&gt;</small>
                                </div>
                            </div>
                            <div class="jumbo-text">
                                <small>&lt;h6&gt;</small>
                                <p style="padding-left:1rem">
                                    Frontend Developer / <br> Instructor
                                </p>
                                <small>&lt;/h6&gt;</small>
                            </div>
                        </div>
                        <small>&lt;/body&gt;</small>
                        <div class="CTA">
                            <a href="#">view My works<i class="lni lni-arrow-left bx-fade-left"></i></a>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
                <!-- END OF INTRODUCTION -->

                <!-- THE FORM DISPLAY -->
                <!-- END OF FORM DISPLAY -->

                <!-- ABOUT DISPLAY -->
                <!-- END OF ABOUT DISPLAY -->

                <!-- SKILL SDISPLAY -->
                <!-- END OF SKILL DISPLAY -->

                <section class="social-section">
                    <div class="socials">
                        <div>
                            <a href="https://www.linkedin.com/in/kingsley-solomon-b90339b2/"><img
                                    src="https://img.icons8.com/fluent-systems-filled/18/f5f5f5/linkedin.png"
                                     /></a>
                        </div>
                        <div>
                            <a href="mailto:kinxly@gmail.com"><img
                                    src="https://img.icons8.com/fluent-systems-filled/18/f5f5f5/google-logo.png"
                                     /></a>
                        </div>
                        <div>
                            <a href="https://github.com/kinxlo"><img
                                    src="https://img.icons8.com/material/18/f5f5f5/github.png"  /></a>
                        </div>
                        <!-- <div>
                    <a href=""><i class='bx bxl-facebook'></i></a>
                </div> -->

                        <div>
                            <a href="tel:+2348100792853"><img
                                    src="https://img.icons8.com/fluent-systems-filled/18/f5f5f5/outgoing-call.png"
                                    /></a>
                        </div>
                        <!-- <div>
                            <a href=""><img
                                    src="https://img.icons8.com/fluent-systems-filled/18/f5f5f5/twitter.png" /></a>
                        </div> -->
                    </div>
                </section>
            </div>`

const ABOUT = `
            <div class="about-screen">
                <div class="">
                    <div class='me'>
                        <div class="img-container">
                            <img src="./assets/images/center-img5.png" alt="Kingsley Solomon">
                        </div>
                        <p id="about-me" class='shadow'></p>
                    </div>
                    <h3 class='shadow'>What you would be getting</h3>
                </div>

                <div class="serve">
                    <div class="service-container">
                        <div class="service-banner neu-light-soft">
                            <div class="service-icon-container neu-light">
                                <img src="https://img.icons8.com/material-rounded/28/950740/speed--v1.png" />
                            </div>
                            <h5>speed</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner neu-light-soft">
                            <div class="service-icon-container neu-light">
                                <img src="https://img.icons8.com/material-rounded/28/950740/for-experienced.png" />
                            </div>
                            <h5>Intuitive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner neu-light-soft">
                            <div class="service-icon-container neu-light">
                                <img src="https://img.icons8.com/material-rounded/28/950740/media-queries.png" />
                            </div>
                            <h5>Responsive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner neu-light-soft">
                            <div class="service-icon-container neu-light">
                                <img src="https://img.icons8.com/material-rounded/28/950740/change.png" />
                            </div>
                            <h5>Dynamic</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                    </div>
                </div>
            </div>`

const CONTACT = `
            <div class="form-div">
                <form action="">
                    <div class="form-heading">
                        <h1 class='shadow'>Send me a Message</h1>
                        <h5 class = 'shadow'>Have a question or want to work together?</h5>
                    </div>
                    <section class="form">
                        <div class="input-div form-neu-light">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="input-div form-neu-light">
                            <input type="email" placeholder="Email" required>
                        </div>
                        <div class="textarea-div form-neu-light">
                            <textarea name="" id="" placeholder="Message" required></textarea>
                        </div>
                        </section>
                        <button><svg class='neu-light' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M21.426,11.095l-17-8c-0.35-0.163-0.763-0.112-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242L4.969,12L3.03,19.758 c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8 C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z M5.481,18.197L6.32,14.84L12,12L6.32,9.16L5.481,5.803L18.651,12 L5.481,18.197z"></path></svg></button>
                </form>
                <div class="arrow-img">
                    <h6>you can also find me here.</h6>
                    <img src = "../assets/images/55-arrow.png" alt="arrow" />
                </div>
            </div>`

const SKILLS = `
            <div class = "skills-screen">
                <div class = "circle-div">

                    <div class = "skill-description">
                        <h1>
                            Experience so far + What i can do
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci ratione ipsam labore illo, iste voluptatem nemo veritatis rem tempora at nisi reprehenderit possimus voluptatum ipsa, dolor iure porro quasi!
                        </p>
                    </div>

                    <div class = "circle">
                    
                        <h3 class = "tool html foward">
                           <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(247, 84, 49, 1);"><path d="M4.136,3.012h15.729l-1.431,16.15l-6.451,1.826l-6.414-1.826L4.136,3.012z M9.402,10.314L9.229,8.279l7.533,0.002 l0.173-1.963L7.065,6.316l0.522,5.998h6.835l-0.243,2.566L12,15.482l-2.214-0.605l-0.141-1.58H7.691l0.247,3.123L12,17.506 l4.028-1.08l0.558-6.111H9.402L9.402,10.314z"></path></svg>
                            <p class='shadow'>HTML</p>
                        </h3>

                        <h3 class = "tool css  foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(40, 98, 233, 1);"><path d="M4.192,3.143h15.615l-1.42,16.034l-6.404,1.812l-6.369-1.813L4.192,3.143z M16.9,6.424L7.1,6.422l0.158,1.949l7.529,0.002 l-0.189,2.02H9.66l0.179,1.913h4.597l-0.272,2.62l-2.164,0.598l-2.197-0.603l-0.141-1.569h-1.94l0.216,2.867L12,17.484l3.995-1.137 L16.9,6.424L16.9,6.424z"></path></svg>
                            <p class='shadow'>CSS</p>
                        </h3>

                        <h3 class = "tool js  foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(232, 212, 77, 1);"><path d="M3,3h18v18H3V3z M19.525,16.707c-0.131-0.821-0.666-1.511-2.252-2.155c-0.552-0.259-1.165-0.438-1.349-0.854 c-0.068-0.248-0.078-0.382-0.034-0.529c0.113-0.484,0.687-0.629,1.137-0.495c0.293,0.09,0.563,0.315,0.732,0.676 c0.775-0.507,0.775-0.507,1.316-0.844c-0.203-0.314-0.304-0.451-0.439-0.586c-0.473-0.528-1.103-0.798-2.126-0.775l-0.528,0.067 c-0.507,0.124-0.991,0.395-1.283,0.754c-0.855,0.968-0.608,2.655,0.427,3.354c1.023,0.765,2.521,0.933,2.712,1.653 c0.18,0.878-0.652,1.159-1.475,1.058c-0.607-0.136-0.945-0.439-1.316-1.002l-1.372,0.788c0.157,0.359,0.337,0.517,0.607,0.832 c1.305,1.316,4.568,1.249,5.153-0.754c0.021-0.067,0.18-0.528,0.056-1.237L19.525,16.707L19.525,16.707z M12.788,11.273h-1.686 c0,1.453-0.007,2.898-0.007,4.354c0,0.924,0.047,1.772-0.104,2.033c-0.247,0.517-0.886,0.451-1.175,0.359 c-0.297-0.146-0.448-0.349-0.623-0.641c-0.047-0.078-0.082-0.146-0.095-0.146L7.73,18.076c0.229,0.473,0.563,0.879,0.994,1.137 c0.641,0.383,1.502,0.507,2.404,0.305c0.588-0.17,1.095-0.519,1.358-1.059c0.384-0.697,0.302-1.553,0.299-2.509 c0.008-1.541,0-3.083,0-4.635L12.788,11.273L12.788,11.273z"></path></svg>
                            <p class='shadow'>JAVASCRIPT</p>
                        </h3>

                        <h3 class = "tool react foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(94, 212, 243, 1);"><circle cx="12" cy="11.245" r="1.785"></circle><path d="M7.002,14.794l-0.395-0.101c-2.934-0.741-4.617-2.001-4.617-3.452c0-1.452,1.684-2.711,4.617-3.452l0.395-0.1L7.113,8.08 c0.297,1.023,0.676,2.022,1.136,2.983l0.085,0.178l-0.085,0.178c-0.46,0.963-0.841,1.961-1.136,2.985L7.002,14.794L7.002,14.794z M6.425,8.699c-2.229,0.628-3.598,1.586-3.598,2.542c0,0.954,1.368,1.913,3.598,2.54c0.273-0.868,0.603-1.717,0.985-2.54 C7.025,10.416,6.696,9.567,6.425,8.699z M16.997,14.794l-0.11-0.392c-0.298-1.024-0.677-2.022-1.137-2.984l-0.085-0.177 l0.085-0.179c0.46-0.961,0.839-1.96,1.137-2.984l0.11-0.39l0.395,0.1c2.935,0.741,4.617,2,4.617,3.453 c0,1.452-1.683,2.711-4.617,3.452L16.997,14.794z M16.587,11.241c0.4,0.866,0.733,1.718,0.987,2.54 c2.23-0.627,3.599-1.586,3.599-2.54c0-0.956-1.368-1.913-3.599-2.542C17.301,9.567,16.972,10.416,16.587,11.241L16.587,11.241z"></path><path d="M6.419,8.695l-0.11-0.39C5.483,5.397,5.733,3.314,6.996,2.588c1.235-0.715,3.222,0.13,5.303,2.265l0.284,0.292 l-0.284,0.291c-0.739,0.769-1.415,1.596-2.02,2.474l-0.113,0.162L9.97,8.088C8.907,8.171,7.851,8.342,6.813,8.597L6.419,8.695 L6.419,8.695z M8.001,3.166c-0.224,0-0.422,0.049-0.589,0.145C6.584,3.788,6.438,5.449,7.008,7.691 c0.891-0.197,1.79-0.338,2.696-0.417c0.525-0.745,1.097-1.453,1.713-2.123C10.114,3.884,8.884,3.166,8.001,3.166L8.001,3.166z M15.998,20.15L15.998,20.15c-1.188,0-2.714-0.896-4.298-2.522l-0.283-0.291l0.283-0.29c0.739-0.77,1.416-1.599,2.021-2.477 l0.112-0.16l0.194-0.019c1.065-0.082,2.122-0.252,3.158-0.507l0.395-0.1l0.111,0.391c0.822,2.906,0.573,4.992-0.688,5.718 C16.698,20.066,16.352,20.155,15.998,20.15L15.998,20.15z M12.583,17.33c1.302,1.267,2.533,1.986,3.415,1.986l0,0 c0.225,0,0.423-0.05,0.589-0.145c0.829-0.478,0.976-2.142,0.404-4.384c-0.89,0.198-1.79,0.34-2.698,0.419 C13.771,15.951,13.199,16.661,12.583,17.33z"></path><path d="M17.58,8.695l-0.395-0.099c-1.036-0.256-2.093-0.426-3.158-0.509l-0.194-0.017l-0.112-0.162 c-0.604-0.878-1.281-1.705-2.021-2.474l-0.283-0.291L11.7,4.853c2.08-2.134,4.066-2.979,5.303-2.265 c1.262,0.727,1.513,2.81,0.688,5.717L17.58,8.695L17.58,8.695z M14.293,7.274c0.954,0.085,1.858,0.228,2.698,0.417 c0.571-2.242,0.425-3.903-0.404-4.381c-0.824-0.477-2.375,0.253-4.004,1.841C13.199,5.821,13.771,6.529,14.293,7.274z M8.001,20.15 c-0.353,0.005-0.699-0.084-1.005-0.257c-1.263-0.726-1.513-2.811-0.688-5.718l0.108-0.391l0.395,0.1 c0.964,0.243,2.026,0.414,3.158,0.507l0.194,0.019l0.113,0.16c0.604,0.878,1.28,1.707,2.02,2.477l0.284,0.29l-0.284,0.291 C10.713,19.255,9.187,20.15,8.001,20.15L8.001,20.15z M7.008,14.788c-0.57,2.242-0.424,3.906,0.404,4.384 c0.825,0.47,2.371-0.255,4.005-1.842c-0.616-0.67-1.188-1.379-1.713-2.123C8.798,15.128,7.898,14.986,7.008,14.788L7.008,14.788z"></path><path d="M12,15.313c-0.687,0-1.392-0.029-2.1-0.088l-0.196-0.017l-0.113-0.162c-0.398-0.572-0.774-1.163-1.126-1.769 c-0.349-0.607-0.672-1.226-0.971-1.859L7.41,11.241l0.084-0.179c0.299-0.632,0.622-1.252,0.971-1.858 c0.347-0.596,0.726-1.192,1.126-1.77l0.113-0.16L9.9,7.256c1.397-0.117,2.801-0.117,4.198,0l0.194,0.019l0.113,0.16 c0.799,1.149,1.503,2.362,2.1,3.628l0.083,0.179l-0.083,0.177c-0.597,1.268-1.299,2.481-2.1,3.628l-0.113,0.162l-0.194,0.017 C13.392,15.283,12.686,15.313,12,15.313L12,15.313z M10.166,14.409c1.235,0.093,2.433,0.093,3.667,0 c0.69-1.01,1.301-2.068,1.832-3.168c-0.529-1.102-1.142-2.161-1.832-3.168c-1.221-0.094-2.446-0.094-3.667,0 c-0.689,1.007-1.305,2.065-1.832,3.168C8.865,12.341,9.479,13.399,10.166,14.409L10.166,14.409z"></path></svg>
                            <p class='shadow'>REACT</p>
                        </h3>

                        <h3 class = "tool git foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(232, 78, 49, 1);"><path d="M21.62,11.108l-8.731-8.729c-0.503-0.502-1.318-0.502-1.823,0L9.257,4.19l2.299,2.3c0.537-0.179,1.149-0.059,1.574,0.367 c0.43,0.43,0.548,1.049,0.365,1.583l2.214,2.217c0.538-0.186,1.156-0.065,1.583,0.362c0.601,0.6,0.601,1.569,0,2.169 c-0.599,0.6-1.566,0.6-2.166,0c-0.449-0.45-0.562-1.113-0.337-1.662l-2.074-2.063v5.437c0.146,0.071,0.286,0.169,0.407,0.29 c0.595,0.601,0.595,1.568,0,2.166c-0.599,0.601-1.574,0.601-2.174,0c-0.599-0.599-0.599-1.565,0-2.164 c0.152-0.15,0.322-0.264,0.504-0.339V9.363c-0.181-0.076-0.353-0.186-0.5-0.334c-0.454-0.454-0.563-1.118-0.33-1.674l-2.26-2.271 l-5.987,5.982c-0.5,0.504-0.5,1.32,0,1.824l8.731,8.729c0.503,0.504,1.318,0.504,1.821,0l8.69-8.689 C22.124,12.429,22.124,11.612,21.62,11.108"></path></svg>
                            <p class='shadow'>GIT</p>
                        </h3>

                        <h3 class = "tool bs foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(2, 113, 209, 1);"><path d="M18.002,2.997H5.999C4.343,3.002,3.002,4.343,2.997,6v12.002c0,1.649,1.352,3.001,3.002,3.001h12.003 c1.649,0,3.001-1.352,3.001-3.001V6C21.003,4.349,19.651,2.997,18.002,2.997z M16.362,15.644c-0.152,0.36-0.389,0.68-0.693,0.927 c-0.315,0.253-0.715,0.463-1.206,0.614c-0.49,0.151-1.074,0.229-1.75,0.229H7.888V6.909h5.103c0.943,0,1.7,0.213,2.267,0.646 c0.569,0.436,0.854,1.082,0.854,1.958c0,0.528-0.13,0.983-0.389,1.357c-0.259,0.373-0.63,0.664-1.111,0.868v0.034 c0.642,0.135,1.137,0.438,1.464,0.912c0.327,0.473,0.493,1.069,0.493,1.789c0,0.405-0.078,0.788-0.225,1.147l0.02,0.021V15.644z M14.278,13.055c-0.309-0.282-0.739-0.419-1.297-0.419H9.737v3.276h3.253c0.554,0,0.991-0.144,1.298-0.435 c0.308-0.289,0.464-0.701,0.464-1.229c-0.005-0.518-0.156-0.919-0.464-1.193h-0.014H14.278z M13.827,10.936 c0.299-0.251,0.444-0.613,0.444-1.084c0-0.526-0.131-0.902-0.397-1.116C13.61,8.522,13.228,8.41,12.728,8.41H9.727v2.898h3.001 C13.164,11.309,13.538,11.181,13.827,10.936L13.827,10.936z"></path></svg>
                            <p class='shadow'>BOOTSTRAP</p>
                        </h3>

                        <h3 class = "tool json foward ">
                           <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12.823,15.122c-0.517,0-0.816,0.491-0.816,1.146c0,0.661,0.311,1.126,0.82,1.126 c0.517,0,0.812-0.49,0.812-1.146C13.639,15.644,13.348,15.122,12.823,15.122z"></path><path d="M14,2H6C4.896,2,4,2.896,4,4v16c0,1.104,0.896,2,2,2h12c1.104,0,2-0.896,2-2V8L14,2z M8.022,16.704 c0,0.961-0.461,1.296-1.2,1.296c-0.176,0-0.406-0.029-0.557-0.08l0.086-0.615c0.104,0.035,0.239,0.06,0.391,0.06 c0.319,0,0.52-0.145,0.52-0.67v-2.122h0.761V16.704z M9.481,17.995c-0.385,0-0.766-0.1-0.955-0.205l0.155-0.631 c0.204,0.105,0.521,0.211,0.846,0.211c0.35,0,0.534-0.146,0.534-0.365c0-0.211-0.159-0.331-0.564-0.476 c-0.562-0.195-0.927-0.506-0.927-0.996c0-0.576,0.481-1.017,1.277-1.017c0.38,0,0.659,0.08,0.861,0.171l-0.172,0.615 c-0.135-0.065-0.375-0.16-0.705-0.16s-0.491,0.15-0.491,0.325c0,0.215,0.19,0.311,0.627,0.476c0.596,0.22,0.876,0.53,0.876,1.006 C10.844,17.515,10.407,17.995,9.481,17.995z M12.787,18c-1.001,0-1.586-0.755-1.586-1.716c0-1.012,0.646-1.768,1.642-1.768 c1.035,0,1.601,0.776,1.601,1.707C14.443,17.33,13.773,18,12.787,18z M17.734,17.945h-0.802l-0.721-1.302 c-0.2-0.359-0.419-0.795-0.585-1.19l-0.016,0.005c0.021,0.445,0.031,0.921,0.031,1.472v1.016H14.94v-3.373h0.891l0.701,1.236 c0.2,0.354,0.4,0.775,0.552,1.155h0.014c-0.05-0.445-0.065-0.9-0.065-1.406v-0.985h0.702V17.945z M14,9c-0.553,0-1,0-1,0V4l5,5H14z"></path></svg>
                            <p class='shadow'>JSON</p>
                        </h3>


                        <h3 class = "tool node foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(101, 155, 96, 1);"><path d="M12,21.985c-0.275,0-0.532-0.074-0.772-0.202l-2.439-1.448c-0.365-0.203-0.182-0.277-0.072-0.314 c0.496-0.165,0.588-0.201,1.101-0.493c0.056-0.037,0.129-0.02,0.185,0.017l1.87,1.12c0.074,0.036,0.166,0.036,0.221,0l7.319-4.237 c0.074-0.036,0.11-0.11,0.11-0.202V7.768c0-0.091-0.036-0.165-0.11-0.201l-7.319-4.219c-0.073-0.037-0.165-0.037-0.221,0 L4.552,7.566c-0.073,0.036-0.11,0.129-0.11,0.201v8.457c0,0.073,0.037,0.166,0.11,0.202l2,1.157 c1.082,0.548,1.762-0.095,1.762-0.735V8.502c0-0.11,0.091-0.221,0.22-0.221h0.936c0.108,0,0.22,0.092,0.22,0.221v8.347 c0,1.449-0.788,2.294-2.164,2.294c-0.422,0-0.752,0-1.688-0.46l-1.925-1.099c-0.479-0.277-0.771-0.791-0.771-1.34V7.786 c0-0.55,0.293-1.064,0.771-1.339l7.316-4.237c0.461-0.258,1.084-0.258,1.544,0l7.317,4.237c0.479,0.274,0.771,0.789,0.771,1.339 v8.458c0,0.549-0.293,1.063-0.771,1.34l-7.317,4.236C12.532,21.93,12.257,21.985,12,21.985L12,21.985z M14.256,16.169 c-3.21,0-3.87-1.468-3.87-2.714c0-0.11,0.092-0.221,0.22-0.221h0.954c0.11,0,0.201,0.073,0.201,0.184 c0.147,0.971,0.568,1.449,2.514,1.449c1.54,0,2.202-0.35,2.202-1.175c0-0.477-0.185-0.825-2.587-1.063 c-1.999-0.2-3.246-0.643-3.246-2.238c0-1.485,1.247-2.366,3.339-2.366c2.347,0,3.503,0.809,3.649,2.568 c0,0.055-0.019,0.109-0.056,0.165c-0.037,0.036-0.091,0.073-0.146,0.073h-0.953c-0.094,0-0.185-0.073-0.202-0.164 c-0.221-1.012-0.789-1.34-2.292-1.34c-1.689,0-1.891,0.587-1.891,1.027c0,0.531,0.237,0.696,2.514,0.99 c2.256,0.293,3.32,0.715,3.32,2.294C17.906,15.253,16.587,16.169,14.256,16.169L14.256,16.169z"></path></svg>
                            <p class='shadow'>NODE</p>
                        </h3>

                       

                        <h3 class = "tool java foward">
                            <svg class="neu-light" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="java" class="svg-inline--fa fa-java fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:rgba(0, 0, 0, 1);" viewBox="0 0 384 512"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                            <p class='shadow'>JAVA</p>
                        </h3>

                        <h3 class = "tool sass foward">
                            <svg class="neu-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(199, 100, 148, 1);"><path d="M12,2c5.522,0,10,4.478,10,10s-4.478,10-10,10S2,17.522,2,12S6.478,2,12,2z M10.013,15.332 c0.146,0.537,0.13,1.039-0.021,1.493l-0.054,0.15c-0.021,0.05-0.043,0.1-0.065,0.146c-0.116,0.241-0.271,0.466-0.462,0.675 c-0.582,0.633-1.394,0.872-1.742,0.671c-0.375-0.219-0.188-1.112,0.487-1.825c0.726-0.765,1.766-1.258,1.766-1.258v-0.002 L10.013,15.332z M18.271,6.281c-0.452-1.777-3.397-2.362-6.185-1.371C10.43,5.499,8.633,6.425,7.343,7.633 c-1.536,1.434-1.78,2.684-1.68,3.206c0.355,1.843,2.881,3.048,3.92,3.942v0.005c-0.307,0.149-2.548,1.274-3.072,2.438 c-0.563,1.225,0.088,2.101,0.513,2.212c1.313,0.363,2.662-0.3,3.388-1.374c0.699-1.051,0.638-2.4,0.337-3.063 c0.413-0.112,0.899-0.162,1.524-0.086c1.751,0.199,2.101,1.3,2.024,1.75c-0.074,0.449-0.436,0.711-0.561,0.786 c-0.126,0.076-0.163,0.101-0.151,0.151c0.013,0.074,0.076,0.074,0.175,0.063c0.138-0.025,0.914-0.375,0.951-1.227 c0.037-1.074-0.988-2.273-2.813-2.25c-0.75,0.014-1.226,0.076-1.563,0.214c-0.025-0.038-0.051-0.063-0.088-0.088 c-1.125-1.213-3.213-2.063-3.125-3.675c0.025-0.588,0.237-2.137,4-4.012c3.088-1.538,5.551-1.112,5.977-0.175 c0.61,1.336-1.314,3.825-4.526,4.187c-1.225,0.138-1.862-0.337-2.026-0.513c-0.174-0.188-0.198-0.2-0.261-0.161 c-0.101,0.05-0.038,0.212,0,0.313c0.1,0.249,0.487,0.688,1.163,0.912c0.587,0.188,2.024,0.299,3.75-0.375 c1.937-0.749,3.449-2.838,3.012-4.588L18.271,6.281L18.271,6.281z"></path></svg>
                            <p class='shadow'>SASS</p>
                        </h3>

                    </div>
                </div>

            </div>`

const PROJECT = `<section class="project-screen">
                <i class="lni lni-arrow-down a-icon"></i>

                <article class="project-card">
                    <div class="p-img-container">
                        <img src="./assets/images/shot1.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Solo</small>
                            <div>
                                <a href="https://github.com/kinxlo/AI-Test" target="blank"><i
                                        class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a class='grow' href="https://kinxlo.github.io/AI-Test/"><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/AI-Test/" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="project-card ">
                    <div class="p-img-container">
                        <img src="./assets/images/shot2.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Lead</small>
                            <div>
                                <a href="https://github.com/kinxlo/globalChef" target="blank"><i
                                        class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a href="https://kinxlo.github.io/globalChef/"><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/globalChef/" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="project-card ">
                    <div class="p-img-container">
                        <img src="./assets/images/shot3.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Solo</small>
                            <div>
                                <a href="https://github.com/kinxlo/glorby" target="blank"><i
                                        class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a href="https://kinxlo.github.io/glorby/"><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/glorby/" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="project-card ">
                    <div class="p-img-container">
                        <img src="./assets/images/shot4.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Solo</small>
                            <div>
                                <a href="https://github.com/kinxlo/copyAppLP" target="blank"><i
                                        class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a href="https://kinxlo.github.io/copyAppLP/"><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/copyAppLP/" target="" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="project-card ">
                    <div class="p-img-container">
                        <img src="./assets/images/shot5.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Team</small>
                            <div>
                                <a href="" target="blank"><i class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a href=""><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/AI-Test/" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="project-card ">
                    <div class="p-img-container">
                        <img src="./assets/images/shot6.png" alt="project-SS">
                    </div>
                    <div class="description">
                        <div class="title">
                            <h1>project Name</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a dolore placeat
                                possimus, suscipit totam nulla vero et praesentium quisquam!</p>
                        </div>
                        <div class="controls">
                            <small class="small">Solo</small>
                            <div>
                                <a href="https://github.com/kinxlo/Elements" target="blank"><i
                                        class='bx bxl-github icon'></i></a>
                                <i class='bx bxs-coin-stack icon stack-icon'></i>
                                <a href="https://kinxlo.github.io/AI-Test/"><small class="icon view">view</small></a>
                            </div>
                        </div>
                        <div class="stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div>
                                <a href="https://kinxlo.github.io/AI-Test/" target="blank"><small class="icon view">view</small></a>
                                <small class = "back-icon">back</small>
                            </div>
                        </div>
                    </div>
                </article>
            </section>`

// get days of been a coder

function getCodeTime() {
  const dateElement = document.querySelector('.date')
  let days
  let hours
  let mins
  let seconds

  // set start date in milliseconds
  let startDate = new Date(2017, 11, 23, 14).getTime()
  // set current date in milliseconds
  let currentDate = new Date().getTime()
  //get time difference
  let timeDiff = currentDate - startDate

  //take out milliseconds
  timeDiff = timeDiff / 1000
  seconds = Math.floor(timeDiff % 60)

  timeDiff = timeDiff / 60
  mins = Math.floor(timeDiff % 60)

  timeDiff = timeDiff / 60
  hours = Math.floor(timeDiff % 24)

  days = Math.floor(timeDiff / 24)

  //display the time on the browser
  dateElement.textContent = `${days} days : ${hours} hours : ${mins} mins`
}

// display clock in real time.
setInterval(() => {
  getCodeTime()
}, 1000)

// Skills
const Skills = {
  link: 'Skills',
  FRONTEND: {
    scriptingLanguage: {
      html: 'HTML',
      json: 'JSON',
      xml: 'XML',
    },
    style: {
      css: 'CSS',
      bootstrap: 'Bootstrap',
      scss: 'SCSS',
      sass: 'SASS',
      framework: {
        bootstrap: 'Bootstrap',
        tailwind: 'tailwind',
      },
    },
    programingLanguage: {
      javascript: 'JavaScript',
      java: 'Java',
      framework: {
        react: 'react',
      },
    },
  },
}

function showSkillDescription() {
  sectionTwo.style.backgroundImage = `none`
  skillDescription.style.display = `block`
}
// function removeSkillDescription() {
//   sectionTwo.style.backgroundImage = `url('../assets/images/binary-1254502.svg')`
//   skillDescription.style.display = `none`
// }
// get the overview of the project technology
function getProjectStack() {
  const cards = document.querySelectorAll('.project-card')
  cards.forEach((card) => {
    const stack = card.querySelector('.stack')
    const stackIcon = card.querySelector('.stack-icon')
    const backIcon = card.querySelector('.back-icon')

    stackIcon.addEventListener('click', () => {
      stack.classList.add('stack-active')
    })
    backIcon.addEventListener('click', () => {
      stack.classList.remove('stack-active')
    })
  })
}

function transitionProject() {
  const cardImgs = document.querySelectorAll('.project-card img')
  cardImgs.forEach((cardImg) => {
    const card = cardImg.parentNode.parentNode
    cardImg.addEventListener('click', (e) => {
      // console.log();
      card.classList.toggle('grow')
    })
  })
}
//=============
// PAGE DISPLAY
// ============
navLists.forEach((nav) => {
  nav.addEventListener('click', () => {
    if (nav.classList.contains('about')) {
      display(ABOUT)
      //   removeSkillDescription()
      runAboutAnimation()
    } else if (nav.classList.contains('contact')) {
      display(CONTACT)
      //   removeSkillDescription()
      runFormAnimation()
    } else if (nav.classList.contains('skills')) {
      display(SKILLS)
      //   showSkillDescription()
      runSkillAnimation()
    }
  })
})

projectsBtns.forEach((projectBtn) => {
  projectBtn.addEventListener('click', () => {
    display(PROJECT)
    transitionProject()
    getProjectStack()
    gsap.from('.project-card', {
      scrollTrigger: '.project-card',
      opacity: 0,
      scale: 0,
      stagger: 0.4,
    })

    //   runProjectAnimation()
  })
})

// ===================================================================
// CREATING ACTIVE NAVIGATION

// Loop through the nav lists and add the active class to the current/clicked list
for (var i = 0; i < navLists.length; i++) {
  navLists[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '')
    }

    // Add the active class to the current/clicked list
    this.className += ' active'
  })
}

// ============================================================
// GSAP ANIMATION CODE
// ============================================================

// entrance animation
function runEntranceAnimation() {
  let tl = gsap.timeline({
    defaults: { duration: 0.7 },
    //   repeat: -1,
    //   yoyo: true,
  })

  tl.from('.border', { borderWidth: 0 })
  tl.from('small', { opacity: 0, color: 'red' })
  tl.from('.introduction', { delay: 1, opacity: 0, x: '-50px' })

  tl.to('#hello', {
    // duration: 1,
    color: '#000000',
    text: "Greetings! &#9996;&#127997;, I'm",
    ease: 'none',
  })
  tl.to('#f-name', {
    // duration: 1,
    color: '#0072b1',
    text: 'Kingsley',
    ease: 'none',
  })
  tl.to('#s-name', {
    // duration: 1,
    color: '#0072b1',
    text: 'Solomon',
    ease: 'none',
  })
  tl.to('#your', {
    // duration: 1,
    color: '#000000',
    text: 'Your',
    ease: 'none',
  })
  tl.to('#job', {
    // duration: 1,
    color: '#000000',
    text: 'Frontend Developer &#128187; / Instructor',
    ease: 'none',
  })

  tl.from('.nav-app', { opacity: 0, y: '10' })

  tl.from(
    '.socials svg',
    {
      duration: 0.3,
      opacity: 0,
      scale: '0.1',
      stagger: 0.2,
      ease: 'bounce.out',
    },
    '-=0.1'
  )

  tl.from('.avatar', {
    duration: 0.3,
    opacity: 0,
    scale: '0.1',
    stagger: 0.2,
    ease: 'bounce.out',
  })
  tl.from('.project-btn', { duration: 3, opacity: 0, ease: 'power2' })
  tl.from('#circuit', {duration: 5, stroke: '#ffffff', repeat: -1, yoyo: true})
}

// run skill animations
function runSkillAnimation() {
  let screenWidth = screen.width
  let tl = gsap.timeline({ defaults: { duration: 0.5, yoyo: true } })
  tl.from('.tool', { opacity: 0, scale: 0, stagger: '0.2' })
  tl.to('.circle', { scale: 0.8 })

  // the switch statement might be inefficient at this point!!!...yes Inefficient
  if (screenWidth >= 500 && screenWidth <= 698) {
    tl.to('.circle', { x: '0', y: '-60%' })
  } else if (screenWidth >= 700 && screenWidth < 1200) {
    tl.to('.circle', { x: '70%', y: '-50%' })
  } else if (screenWidth >= 1200) {
    tl.to('.circle', { scale: '0.7', x: '95%', y: '-25%' })
  } else {
    tl.to('.circle', { scale: '0.6', x: '0', y: '-45%' })
  }
  tl.from('.skill-description', { duration: 1, opacity: 0 })
}

// run Project Animation
function runProjectAnimation() {}

// run text animations
function runTextAnimation() {
  let tl = gsap.timeline()
}

// run about me animation

function runAboutAnimation() {
  gsap.to('#about-me', {
    duration: 5,
    text: `I'm a Front-End Developer from Lagos, Nigeria, currently working at <a
                            href="https://techstudioacademy.com/" target="blank" class="TS">Techstudio
                            academy NG</a> I have an interest for UI effects, animations and creating intuitive, dynamic
                        user experiences. you can checkout <a href="project" class="TS">what i have done.</a> When i'm not working, I enjoy video games and chess. I
                        would
                        definetly like to work with you. <a href = "../assets/CV/Kingsley Ifijeh Curriculum Vitae (Updated).docx" class = "TS" download>Get my CV Here.</a>`,
    ease: 'none',
  })

  gsap.from('.img-container', {
    delay: 2,
    duration: 0.5,
    scale: 0,
    opacity: 0,
    rotate: -360,
  })

  gsap.from('.service-banner', {})
}

function runFormAnimation() {
  gsap.from('.form', {
    duration: 1,
    opacity: 0,
    marginRight: '50%',
    marginLeft: '50%',
  })
}

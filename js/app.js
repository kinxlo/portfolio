// this is the dynamic content for each link or list item
// about,
// contact,
// skill
const navLists = document.querySelectorAll('.nav-menu li')

const projects = document.querySelector('.CTA')
const sectionTwo = document.querySelector('.section-two')
const skillDescription = document.querySelector('.skill-description')

const display = (page) => {
  const screen = document.querySelector('.screen')
  screen.innerHTML = page
}

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
                <div class="me">
                    <img src = "../assets/images/55-arrow.png" alt="arrow" class="arrow-img" />
                    <div class="img-container">
                        <img src="./assets/images/center-img5.png" alt="Kingsley Solomon">
                    </div>
                    <p>I'm a Front-End Developer from Lagos, Nigeria, currently working at <a
                            href="https://techstudioacademy.com/" target="blank" class="TS">Techstudio
                            academy NG</a> I have an interest for UI effects, animations and creating intuitive, dynamic
                        user experiences. you can checkout <a href="project" class="TS">what i have done.</a> When i'm not working, I enjoy video games and chess. I
                        would
                        definetly like to work with you. <a href = "../assets/CV/Kingsley Ifijeh Curriculum Vitae (Updated).docx" class = "TS" download>Get my CV Here.</a></p>
                </div>

                <div class="serve">
                    <h3>What you would be getting</h3>
                    <div class="service-container">
                        <div class="service-banner">
                            <div class="service-icon-container">
                                <img src="https://img.icons8.com/material-rounded/28/950740/speed--v1.png" />
                            </div>
                            <h5>speed</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner">
                            <div class="service-icon-container">
                                <img src="https://img.icons8.com/material-rounded/28/950740/for-experienced.png" />
                            </div>
                            <h5>Intuitive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner">
                            <div class="service-icon-container">
                                <img src="https://img.icons8.com/material-rounded/28/950740/media-queries.png" />
                            </div>
                            <h5>Responsive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia!</p>
                        </div>
                        <div class="service-banner">
                            <div class="service-icon-container">
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
                        <h1>Send me a Message</h1>
                        <h5>Have a question or want to work together?</h5>
                    </div>
                    <div class="input-div">
                        <input type="text" placeholder="NAME" required>
                    </div>
                    <div class="input-div">
                        <input type="email" placeholder="EMAIL" required>
                    </div>
                    <div class="textarea-div">
                        <textarea name="" id="" placeholder="MESSAGE" required></textarea>
                    </div>
                    <button>Submit</button>
                </form>
                <div class="arrow-img">
                    <h6>you can also find me here.</h6>
                    <img src = "../assets/images/55-arrow.png" alt="arrow" />
                </div>
            </div>`

const SKILLS = `
            <div class = "skills-screen">
                <div class = "circle-div">
                    <div class = "circle">
                        <h3 class = "html  foward">HTML 5</h3>
                        <h3 class = "css  foward">CSS</h3>
                        <h3 class = "js  foward">JAVASCRIPT</h3>
                        <h3 class = "react foward">REACT</h3>
                        <h3 class = "git foward">GIT</h3>
                        <h3 class = "bs foward">BOOTSTRAP</h3>
                        <h3 class = "json behind ">JSON</h3>
                        <h3 class = "sass behind">SASS</h3>
                        <h3 class = "node behind">NODE.JS</h3>
                        <h3 class = "gsap behind">GSAP</h3>
                        <h3 class = "java behind">JAVA</h3>
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
                                <a href="" target="blank"><small class="icon">view</small></a>
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

// const SKILLDESCRIPTION = `
//                 <div class = "skill-description">
//                     <h1>
//                         Experience so far + What i can do
//                     </h1>
//                     <p>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci ratione ipsam labore illo, iste voluptatem nemo veritatis rem tempora at nisi reprehenderit possimus voluptatum ipsa, dolor iure porro quasi!
//                     </p>
//                 </div>`

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
function removeSkillDescription() {
  sectionTwo.style.backgroundImage = `url('../assets/images/binary-1254502.svg')`
  skillDescription.style.display = `none`
}

//=============
// PAGE DISPLAY
// ============
navLists.forEach((nav) => {
  nav.addEventListener('click', () => {
    if (nav.className == 'about') {
      display(ABOUT)
      removeSkillDescription()
    } else if (nav.className == 'contact') {
      display(CONTACT)
      removeSkillDescription()
    } else if (nav.className == 'skills') {
      display(SKILLS)
      showSkillDescription()
    }
  })
})

projects.addEventListener('click', () => {
  display(PROJECT)
  getProjectStack()
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

let tl = gsap.timeline({
  defaults: { duration: 1 },
  //   repeat: -1,
  //   yoyo: true,
})

tl.from('.border', { borderWidth: 0 })
tl.from('.introduction', { delay: 1, opacity: 0, x: '-50px' })
tl.from('small', { duration: 2, opacity: 0, color: 'red' })
tl.from(
  '.socials img',
  { duration: 0.3, opacity: 0, scale: '0.1', stagger: 0.2, ease: 'bounce.out' },
  '-=0.1'
)

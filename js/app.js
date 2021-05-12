// this is the dynamic content for each link or list item
// about,
// contact,
// Skills.
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.project')

const sectionTwo = document.querySelector('.section-two')
const skillDescription = document.querySelector('.skill-description')

const display = (page) => {
  const screen = document.querySelector('.screen')
  screen.innerHTML = page
}

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
  dateElement.textContent = `${days} days : ${hours} hours : ${mins} mins : ${seconds} sec`
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

// ======================================================================
// html strings

const HOME = `
<div class="main-text introduction">
    <div class="jumbo-name">
        <div>
            <h6>Hi, i'm</h6>
            <div class="name">
                <div>
                    <h1>Ifijeh 'kinxlo'</h1>
                </div>
                <div class="second-name">
                    <h1>Solomon</h1>
                    <!-- <div class="hyphen"></div> -->
                </div>
            </div>
            <h6>your</h6>
        </div>
    </div>
    <div class="jumbo-text">
        <p>
            Frontend Developer / Web Developer
        </p>
    </div>
    <div class="CTA">
        <a href="#">view My works<i class="lni lni-arrow-left bx-fade-left"></i></a>
        <div class="line"></div>
    </div>
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
                        <h3 class = "html">HTML 5</h3>
                        <h3 class = "css">CSS</h3>
                        <h3 class = "js">JAVASCRIPT</h3>
                        <h3 class = "react">REACT</h3>
                        <h3 class = "git">GIT</h3>
                        <h3 class = "bs">BOOTSTRAP</h3>
                        <h3 class = "json">JSON</h3>
                        <h3 class = "sass">SASS</h3>
                        <h3 class = "node">NODE.JS</h3>
                        <h3 class = "gsap">GSAP</h3>
                        <h3 class = "java">JAVA</h3>
                    </div>
                </div>

            </div>`

// const SKILLDESCRIPTION = `
//                 <div class = "skill-description">
//                     <h1>
//                         Experience so far + What i can do
//                     </h1>
//                     <p>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci ratione ipsam labore illo, iste voluptatem nemo veritatis rem tempora at nisi reprehenderit possimus voluptatum ipsa, dolor iure porro quasi!
//                     </p>
//                 </div>`

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

//display the about me page
about.addEventListener('click', () => {
  display(ABOUT)
  removeSkillDescription()
})

// display the home page
contact.addEventListener('click', () => {
  display(CONTACT)
  removeSkillDescription()
})

skills.addEventListener('click', () => {
  display(SKILLS)
  showSkillDescription()
})

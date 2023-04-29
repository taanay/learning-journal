
const heroEl = document.getElementById("hero-el")
const viewMoreLink = document.getElementById("view-more-link")
const aboutMeEL = document.getElementById("about-me-el")
const homeEl = document.getElementById("home-el")
const viewMoreEl = document.getElementById("view-more-el")
const aboutMeBlock = document.getElementById("about-me-block")

viewMoreLink.addEventListener('click', renderViewMore)
aboutMeEL.addEventListener('click', renderAboutMe)
homeEl.addEventListener('click', renderHome)
aboutMeEL.addEventListener('click', renderAboutMe)

function renderViewMore() {
    viewMoreEl.innerHTML = `

        <p class="date">April 25, 2023</p>

        <h1 class="blog-head">My new journey as a <span class="ctn">bootcamp student</span></h1>

        <p class="blog-head-content">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>

        <img id="hero-img" class="hero-img" src="images/article-image-hero.png">

        <div class="description">
            <p class="describe-head">How I stay committed to learning</p>

            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.
            
            While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
            
            <p class="describe-head">How I got started</p>
            
            <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.
            
            That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>


        </div>
        <h4>Recent Posts</h4>
    `
    heroEl.style.display = "none"
    viewMoreEl.style.display = "block"
    viewMoreEl.classList.add('hero-el-after')
    viewMoreLink.style.display = "none";
    aboutMeBlock.style.display = "none"
}


function renderAboutMe() {
    heroEl.style.display = "none"
    viewMoreLink.style.display = "none";
    viewMoreEl.style.display = "none"
    aboutMeBlock.style.display = "block"
    aboutMeBlock.innerHTML = 
    `
        <div class="about-head">
        <img id="avatar-img" class="avatar-img" src="images/avatar.png">

        <h1 class="blog-head">Hi there! My name is <span>Roku and welcome to<span> <span>my learning journal.</span></h1>

        <p class="blog-head-content">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </div>
        <div class="description">

            <p class="describe-head">How I stay committed to learning</p>

            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>

            <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>

            <p class="describe-head">How I got started</p>

            <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>

            <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
        </div>
    `
}

function renderHome() {
    heroEl.style.display = "block"
    viewMoreLink.style.display = "block"
    viewMoreEl.style.display = "none"
    aboutMeBlock.style.display = "none"
}

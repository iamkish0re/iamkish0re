function MyPage() {
    return (
        <div className="body">
        <div class="top-container">
            <img class="top-cloud" src={require("../assets/cloud.png")} alt="cloud-img"/>
            <h1>I'm Kishore</h1>
            <h2 class="role">a developer!</h2>
            <img class="bottom-cloud" src={require("../assets/cloud.png")} alt="cloud-img"/>
            <img src={require("../assets/mountain.png")} alt="mountain-img"/>
        </div>
        <div class="middle-container">
            <div class="profile">
                <img src="images/" alt=""/>
                <h2>Hi,</h2>
                <p>I'm a software developer and data engineer with experience in building scalable, robust and
                    high-performance web applications and Data warehouse. Annnddd, I ❤️ coding!.
                </p>
            </div>
            <hr/>
            {/* <div class="skills">
                <h2>My Skills.</h2>
                <div class="skill-row">
                    <img class="skill-img" src="images/python.png" alt=""/>
                    <h3>Python</h3>
                    <p>Have 4+ years experience with python as a developer and worked on various applications and programms.
                    </p>
                </div>
                <div class="skill-row">
                    <img class="skill-img" src="images/react.png" alt=""/>
                    <h3>ReactJs</h3>
                    <p>Have worked on various front-end development with ReactJs with responsive web-design</p>
                </div>
            </div>
            <hr/> */}
            <div className="site-under">
            <h2>Site under Construction ! 🛠️</h2>
            <img class="site-img" src={require("../assets/site-under.png")} width="50%" alt="mountain-img"/>
            </div>
            <div class="contact-me">
                <div class="contact-msg">
                    <h2>Get In Touch</h2>
                    <h3>Want to catch up for any projects?</h3>
                    <p>Drop a mail to grab a cup of coffee!</p>
                </div>
    
                <a class="btn" href="mailto:kishoresreedhar1999@gmail.com">Contact Me</a>
            </div>
        </div>
        <div class="bottom-container">
            <a class="footer-link" href="https://www.linkedin.com/in/iamkish0re">LinkedIn</a>
            <a class="footer-link" href="https://twitter.com/iamkish0re">Twitter</a>
            <a class="footer-link" href="https://github.com/iamkish0re">Github</a>
            <p class="trade-mark">© 2023 Kishore Sreedharan.</p>
        </div>
    </div>
    );
  }

export default MyPage;

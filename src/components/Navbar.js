// import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='container-fluid p-3 '>
        <div className="row">
            <a href="#home" className="mylogo"><bold>iamkish0re</bold></a>
            <ul className="col-10">
            <li className="p-4"><a href="#home">About</a></li>
            <li className="p-4"><a href="#skills">Skills</a></li>
            <li className="p-4"><a href="#honors">Honor & Awards</a></li>
            <li className="p-4"><a href="#certs">Certfications</a></li>
            </ul>
            <a href="https://www.gitconnected.com/iamkish0re/resume" rel="noreferrer" target="_blank" className="col-2">Resume</a>
        </div>
    </div>
    )
}
import LPTL1 from "../assets/LP-TL-1.png"
import LPTL2 from "../assets/LP-TL-2.png"
import LPTL3 from "../assets/LP-TL-3.png"
import LPTL4 from "../assets/LP-TL-4.png"

function LandingPage() {
  return (
    <>
      <div>
        <nav>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
            <li><button>Get Started</button></li>
            <li><img src="" alt="" /></li>
          </ul>
        </div>
        </nav>
        <div>
          <div>
            <h1>
              Learn anything,<br />
              anytime,anywhere
            </h1>
          </div>
          <div>
            <p>
              Curiosity your one-stop solution for endless learning,learn a new courses anywhere, anytime.Get started now to expand your knowledge to horizon.
            </p>
          </div>
          <div>
            <button>Start Now</button>
            <button>Become An Instructor</button>
          </div>
        </div>
      </div>
      <div>
        <div>

          <div>
            <img src={LPTL1} alt="Online Course Logo" />
          </div>
          <div>
            <h1>Online Courses</h1>
          </div>
          <div>
            <p>Dive deep with our extensive library of online courses, designed to fuel your curiosity and unlock your potential.</p>
          </div>
        </div>
        <div>
          <div>
            <img src={LPTL2} alt="Expert Instructor Logo" />
          </div>
          <div>
            <h1>Expert Instructor</h1>
          </div>
          <div>
            <p>Learn from the best. Our platform connects you with industry leaders who share their knowledge in engaging and insightful ways.</p>
          </div>
        </div>
        <div>
          <div>
            <img src={LPTL3} alt="Easy Communication Logo" />
          </div>
          <div>
            <h1>Easy Communication</h1>
          </div>
          <div>
            <p>Stay connected with instructors and fellow learners. Ask questions, share insights, and build a vibrant learning community.</p>
          </div>
        </div>
        <div>
          <div>
            <img src={LPTL4} alt="Easy To Use Logo" />
          </div>
          <div>
            <h1>Easy To Use</h1>
          </div>
          <div>
            <p>Our platform is designed for simplicity. Access your courses, interact with instructors, and track your progress with ease.</p>
          </div>
        </div>

      </div>
      <div>

      </div>
    </>
  )
}
export default LandingPage
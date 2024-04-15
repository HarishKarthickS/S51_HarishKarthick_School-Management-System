import logo from '../assets/Frame 4 (5).png'
function LandingPage() {
  return (
    <>
        <div className="bg-[url('https://themegrilldemos.com/elearning/wp-content/uploads/sites/197/2021/10/banner.jpg')] w-[100vw] min-h-[768px] bg-cover  bg-no-repeat ">            
        <nav className='flex justify-between '>
                <div><img src={logo} alt="logo" className='w-64 ml-24 mt-2'/></div>
                <div>
                    <div><h3>Home</h3></div>
                    <div><h3>Courses</h3></div>
                    <div><h3>Blog</h3></div>
                    <div><h3>Contact</h3></div>
                    <div>Get Started</div>
                    <div> Search</div>
                </div>
            </nav>
            <h1>Learn Anything,
                Anytime,anywhere
            </h1>
            <button>
                Start Now
            </button>
            <h5>Become an instructor</h5>
        </div>
    </>
  )
}

export default LandingPage
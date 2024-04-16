import logo from '../assets/Frame 4 (5).png'
function LandingPage() {
    const benefits = [
        {
          icon: 'fas fa-graduation-cap', // Replace with your preferred icon library
          title: 'Expert Instructors',
          description: 'Learn from industry professionals with years of experience.'
        },
        {
          icon: 'fas fa-calendar-alt', // Replace with your preferred icon library
          title: 'Flexible Learning',
          description: 'Study at your own pace, whenever it suits your schedule.'
        },
        {
          icon: 'fas fa-rocket', // Replace with your preferred icon library
          title: 'Career-Oriented Curriculum',
          description: 'Gain the skills and knowledge employers are looking for.'
        },
        {
          icon: 'fas fa-users', // Replace with your preferred icon library
          title: 'Supportive Community',
          description: 'Connect with fellow learners and get help when you need it.'
        }
      ];
  return (
    <>
        <div className="bg-[url('https://themegrilldemos.com/elearning/wp-content/uploads/sites/197/2021/10/banner.jpg')] w-[100vw]  min-h-[768px] bg-right bg-cover bg-no-repeat ">   
        <div className='bg-[#00000034] w-[100vw] min-h-[768px] '>    
        <nav className='flex justify-between mr-[6vw]'>
                <div><img src={logo} alt="logo" className='w-64 ml-24 mt-2'/></div>
                <div className="flex flex-row  mt-[6vh] w-[39vw] justify-between ">
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
            <h5>Become an instructor</h5></div>     
            <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Experienced Instructors</li>
        <li>Flexible Learning Options</li>
        <li>Career-Oriented Curriculum</li>
        <li>Supportive Community</li>
      </ul>
    </section>
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul className="benefits">
        {benefits.map((benefit) => (
          <li key={benefit.title}>
            <i className={benefit.icon}></i>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </li>
        ))}
      </ul>
    </section>
        </div>
    </>
  )
}

export default LandingPage

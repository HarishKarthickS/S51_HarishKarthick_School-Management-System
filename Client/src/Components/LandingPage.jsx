import {Link} from 'react-router-dom' 

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col justify-center w-full font-semibold min-h-[759px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9c7c9dac477a9814e517a390501aa8bb615986f6daa759e87cf1fea2e3637d?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start px-16 pt-3.5 pb-14 w-full min-h-[759px] bg-black bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center w-full max-w-[1224px] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a680c46b666b76a8f5d04c6a18f4dac53de501b260610349e4afabaf1caf33?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 max-w-full aspect-[2.44] w-[252px]"
            />
            <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-auto gap-5 my-auto text-2xl text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="grow">Home</div>
                <div>Courses</div>
                <div>Blog</div>
                <div>
                  Contact
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between text-2xl text-center text-violet-700">
                <Link to='/login' >
                <div className="justify-center px-6 py-6 bg-white rounded-3xl max-md:px-5" >
                  Get Started
                </div>
                </Link>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b05680b6cce6c68767aba158138897ad3532b2f589ebc2730db0e7a2e2829ac?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="shrink-0 my-auto aspect-square w-[31px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-32 ml-6 text-7xl text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Learn anything,anytime, anywhere
          </div>
          <div className="mt-16 ml-3 text-2xl text-white text-opacity-80 max-md:mt-10 max-md:max-w-full">
            Curiosity your one-stop solution for endless learning,learn a new
            courses anywhere, anytime.Get started now to expand your knowledge
            to horizon.
            <br />
          </div>
          <div className="flex gap-5 mt-16 ml-6 text-2xl text-center text-white max-md:flex-wrap max-md:mt-10">
            <div className="justify-center px-9 py-8 bg-violet-700 rounded-xl max-md:px-5">
              Start Now -&gt;
            </div>
            <div className="flex-auto my-auto">Become An Instructor</div>
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-28 w-full max-w-[1342px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c1ab4bd0e74321b365090d99168d8ab30c2a8d5c7897c42a886a3350f648bfa?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="aspect-square w-[54px]"
              />
              <div className="mt-4 text-xl font-bold">Online Courses</div>
              <div className="mt-4 text-sm">
                Dive deep with our extensive library of online courses, designed
                to fuel your curiosity and unlock your potential.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df850e8004736e96f20897e342ed6ec10f2810accfe139b123c15e23de233b3?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="aspect-square w-[54px]"
              />
              <div className="mt-5 text-xl font-bold">Expert Instructor</div>
              <div className="mt-3 text-sm">
                Learn from the best. Our platform connects you with industry
                leaders who share their knowledge in engaging and insightful
                ways.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86ce374123741ec175de85ce2fbfa706f6b0d393894f990da8eb84d5b2721bc7?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="aspect-square w-[54px]"
              />
              <div className="mt-4 text-xl font-bold">Easy Communication</div>
              <div className="mt-4 text-sm">
                Stay connected with instructors and fellow learners. Ask
                questions, share insights, and build a vibrant learning
                community.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a65c12d117b9e2c9c57b7ec878e860891a47dc86fa2d59bfda82bd0f157a261?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="aspect-square w-[54px]"
              />
              <div className="mt-3 text-xl font-bold">Easy To Use</div>
              <div className="mt-5 text-sm">
                Our platform is designed for simplicity. Access your courses,
                interact with instructors, and track your progress with ease.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col px-10 py-14 mt-28 w-full min-h-[591px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75631f1f73656672f63bd7138c8935ad28bea41fc7a93034ce1b96e19e0251f2?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 self-start text-xl text-white">
          <div className="shrink-0 bg-amber-500 rounded-full h-[15px] w-[15px]" />
          <div className="flex-auto">ON-DEMAND COURSES</div>
        </div>
        <div className="relative mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow mt-7 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                  Complete Python
                  <br />
                  Masterclass For
                  <br />
                  Beginners
                </div>
                <div className="mt-9 text-xl max-md:max-w-full">
                  Master Python from scratch to powerful applications in this
                  beginner-friendly Complete Python Masterclass!
                </div>
                <div className="flex gap-5 mt-9 font-black text-center max-md:flex-wrap">
                  <div className="justify-center px-7 py-5 text-xl bg-amber-500 rounded-[50px] max-md:px-5">
                    Start Course{" "}
                  </div>
                  <div className="flex-auto my-auto text-xl">
                    View All Course -&gt;
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3039627a407b26ce5c8f90fdc9ab2dfa5bc684f49ed7f59719a6c656500397e4?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pr-3.5 pl-20 mt-28 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75d0017c48e49be9f1584056efa770d08381b588e0a807196629d7843fdff697?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[0.88] w-[42px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/373d0e4f64090da947941baab04270e51710939693ff5b9057a6c267e39a4e76?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[1.02] w-[49px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5da6734b12b66f9e1b109a69975f1b1746b6712f7476cff423e88ccefd608ea?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 w-14 aspect-[1.16]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2cafdf37fca76b41825eece6d3d2eb840ece62d35f556d5698b34af29d9c7eef?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[0.88] w-[42px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c380b4c058743ad68290f6fca326ff48044accce538eb8ef53c20f2fe5b78e89?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[0.89] w-[43px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25cfbd370d86b6537c7e3b44ef561fe8eb84e105ac5b31bdd5833bb375956d60?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[1.19] w-[57px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6182f92062fd99fa0529b3f73e94d8a42e285ffa6e1db98a3f73d3e0886a38?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[0.96] w-[46px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7c7470d68e6468663d5d9d5517908f1d1eddbbbeaccf1cf09a6dab341834b67?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
            className="shrink-0 aspect-[1.02] w-[49px]"
          />
        </div>
        <div className="mt-52 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed02b5e5b8e3b6868403838c3e1cefa65f5bb5d0ee01bd806325aa1252c51398?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto font-black text-black max-md:mt-10 max-md:max-w-full">
                <div className="ml-4 text-5xl text-center max-md:max-w-full max-md:text-4xl">
                  Beginner Friendly
                </div>
                <div className="self-stretch mt-14 text-2xl font-light max-md:mt-10 max-md:max-w-full">
                  Take the first step with confidence. Curiosity's Beginner
                  Friendly courses are designed for anyone, regardless of prior
                  knowledge. We'll guide you with clear steps and engaging
                  activities to set you on the path to success.
                </div>
                <div className="justify-center px-8 py-5 mt-14 text-2xl text-center text-white bg-amber-400 rounded-[75px] max-md:px-5 max-md:mt-10">
                  Get Started -&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-start px-11 py-20 mt-60 w-full font-bold text-white min-h-[644px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b270b68b167b1bd6b4250fcd315e325b86e76d0e712a25a567f5c3c1cd5dafdf?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-12 text-5xl max-md:mt-10 max-md:max-w-full max-md:text-3xl max-w-[500px]">
          Leading AI Doubt and Support System
        </div>
        <div className="relative mt-16 text-2xl max-md:mt-10 max-md:max-w-full max-w-[500px]">
          Our Platform provides free leading ai doubt and support system that
          takes your learning to next level
        </div>
        <div className="relative justify-center px-12 py-7 mt-12 mb-3 text-4xl text-center bg-orange-500 rounded-[50px] max-md:px-5 max-md:mt-10">
          Try Now -&gt;
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-14 w-full min-h-[314px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2202ea2c3a0bfd0c8f18cc0948a4b48e5b643e793bfb2d59798779ce8362583f?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-3 mb-5 w-full max-w-[1081px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-center text-white max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/71180135f345288123dc6e361b15d1b36f65ee63ccd99c3a40642f6bde1dc79c?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="aspect-[1.02] w-[55px]"
                />
                <div className="mt-5 text-2xl font-black">
                  41K
                  <br />
                </div>
                <div className="self-stretch mt-5 text-xl font-bold">
                  Online Courses
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
                <div className="flex flex-col px-4 text-2xl font-black">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0fc959933bd103f7e15030036c8653b2cc8af82ee6de3d477c62cde5b7bae8?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="self-center aspect-[1.22] w-[55px]"
                  />
                  <div className="self-start mt-7 ml-2.5">
                    41K
                    <br />
                  </div>
                </div>
                <div className="mt-5 text-xl font-bold">Students</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-center text-white whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/293fe74db80d9f1081bac590bb89890dca46aea0d1dc3cd51184a3bbef1a8b34?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="aspect-[1.02] w-[55px]"
                />
                <div className="mt-5 text-2xl font-black">
                  41K
                  <br />
                </div>
                <div className="self-stretch mt-5 text-xl font-bold">
                  Instructors
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-center text-white max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5817f36074dd30d0d71d2d3cc4a8a72b2504d53f5aea40a71408ee43785db79a?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="aspect-[1.02] w-[55px]"
                />
                <div className="mt-5 text-2xl font-black">
                  41K
                  <br />
                </div>
                <div className="self-stretch mt-5 text-xl font-bold">
                  Total Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-16 mt-10 w-full text-2xl font-medium tracking-wider text-center text-white min-h-[473px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be17ebb0a8b810cba44ee4ab8d5a92474100fd3b4fc0bda92958968fa1eb1cc3?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center max-w-full w-[856px]">
          <div className="font-semibold text-black text-opacity-0">
            SUBSCRIBE <span className="text-black">-</span>
          </div>
          <div className="mt-12 text-6xl font-extrabold tracking-[2.56px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            All Access Membership
          </div>
          <div className="self-stretch mt-11 max-md:mt-10 max-md:max-w-full">
            Fuel your curiosity without limits. All Access Membership: Your key
            to premium content and a personalized learning journey.
          </div>
          <div className="justify-center px-6 py-5 mt-12 text-black bg-white rounded-[50px] max-md:px-5 max-md:mt-10">
            Subscribe & Save
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-3 pb-14 w-full bg-black border border-white border-solid max-md:max-w-full">
        <div className="w-full max-w-[1346px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9f64c9fece2d04d6372bb3355830073e3126ee18e5e32f8671a88d8ed54552b?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-full aspect-[2.5]"
                />
                <div className="text-xl font-semibold text-white">
                  Learning shouldn't have limits. Curiosity provides top-quality
                  education, accessible to everyone, everywhere.
                </div>
                <div className="flex gap-5 justify-between mx-7 mt-10 max-md:mx-2.5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb74545a305e0d62c4a08164af69d071a7164d979c48cf5838ade8d858e58787?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 aspect-square w-[35px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa130c7ab4c8ef785a88fcc127835edca64af205e57e1840ef48cfc6e83316e?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 aspect-square w-[35px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a31dba629986fd572a6f2a72e36cf174af7af03d1613887ab1ddabf1fc08968?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 aspect-square w-[35px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3354670a2cf4351a234247ee99f531cdc0c7eeeb2d53cc6a0c5225900835b9cd?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 aspect-square w-[35px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch my-auto text-2xl font-semibold text-white max-md:mt-10">
                <div className="self-stretch text-3xl font-extrabold">
                  Quick Links
                </div>
                <div className="mt-7 text-center">Home</div>
                <div className="mt-6 text-center">Account</div>
                <div className="mt-7 text-center">Courses</div>
                <div className="mt-7 text-center">Blog</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch my-auto text-2xl font-semibold text-center text-white max-md:mt-10">
                <div className="self-stretch text-3xl font-extrabold">
                  Company
                </div>
                <div className="mt-7">About us</div>
                <div className="self-stretch mt-7">Contact Us</div>
                <div className="mt-7">Support</div>
                <div className="mt-5">Policy</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-14 text-2xl font-medium text-white max-md:mt-10">
                <div className="text-3xl font-extrabold">Get In Touch</div>
                <div className="mt-9 tracking-wider">
                  G1,Plot no:21,BT Nagar,
                  <br />
                  Gerugambakkam,
                  <br />
                  Chennai-600128
                </div>
                <div className="mt-7 tracking-wider">+91 90423 70348</div>
                <div className="mt-7 tracking-wider">
                  sharishkarthick@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-12 w-full bg-white border border-white border-solid min-h-[3px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 px-5 mt-16 w-full text-xl font-bold text-center text-white max-w-[985px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto">Copyright © 2024 Curiosity</div>
          <div className="flex-auto">Powered by HK Foundation</div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
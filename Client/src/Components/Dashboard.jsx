import React from 'react'

function Dashboard() {
  return (
    <div className="bg-white rounded-3xl">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-between self-stretch p-8 mx-auto w-full bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-8">
          <div className="flex gap-2.5">
            <div className="flex justify-center items-center p-1.5 w-10 h-10 bg-violet-600 rounded-[60px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41340b7b30ccc44049d3ea19bf86d44e07933c12dd01b0aedb79e88910e064f4?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="w-5 aspect-square fill-white"
              />
            </div>
            <div className="flex-1 text-base font-extrabold uppercase bg-clip-text bg-[linear-gradient(90deg,#702DFF_-3.24%,#7550FB_29.22%,#4A3AFF_74%,#4A3AFF_101.79%)]">
              Welcome
            </div>
          </div>
          <div className="mt-14 text-base font-semibold uppercase text-neutral-700 max-md:mt-10">
            OVERVIEW
          </div>
          <div className="flex gap-3 py-2 mt-5 text-base font-medium text-violet-600 whitespace-nowrap bg-white rounded-[40px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b47914e738a1c1d8964b662193741fe33f4de907380a46a97c8d1118b8424a14?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Dashboard</div>
          </div>
          <div className="flex gap-3 py-2 mt-2 text-base font-medium whitespace-nowrap rounded-[40px] text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/443b196f0cb3714e666f5e4ea41c1c25b7d59f66872ea8bca3c8c3d274ca274a?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Inbox</div>
          </div>
          <div className="flex gap-3 py-2 mt-2 text-base font-medium whitespace-nowrap rounded-[40px] text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bcd84de4481456a780ad34fa98dea3082b95e19a4bc7673cc47ae1a01dd5603?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Lesson</div>
          </div>
          <div className="flex gap-3 py-2 mt-2 text-base font-medium whitespace-nowrap rounded-[40px] text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dff999641e6273fa7f9cb6eaed90e5b3890085a74bd848a039a6bb393f2c722?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Task</div>
          </div>
          <div className="flex gap-3 py-2 mt-2 text-base font-medium whitespace-nowrap rounded-[40px] text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/382029b2b7af72dd96ca363f4317de8814bfc19d69673fd7424002ac55179cf2?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Group</div>
          </div>
          <div className="mt-14 text-base font-semibold uppercase text-neutral-700 max-md:mt-10">
            FRIENDS
          </div>
          <div className="mt-80 text-base font-semibold uppercase text-neutral-700 max-md:mt-10">
            SETTINGS
          </div>
          <div className="flex gap-3 py-2 mt-5 text-base font-medium whitespace-nowrap rounded-[40px] text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca1124c7c9e5cbe6371cb4cee6be1c9ee53b54a39fe725c22cb3d1a3d9dacb4?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Settings</div>
          </div>
          <div className="flex gap-3 py-2 mt-2.5 text-base font-medium text-red-500 whitespace-nowrap rounded-[40px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2beae3d1b6370c2613b0e3928d8908595f2fd355bd6b4af0c4dbe18be745f5?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div className="flex-1">Logout</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch pt-5 max-md:mt-8 max-md:max-w-full">
          <div className="flex gap-3 justify-center pr-3 text-xs font-medium text-neutral-400 max-md:flex-wrap">
            <div className="flex flex-1 gap-2.5 justify-center px-4 py-5 bg-white rounded-xl border border-solid border-stone-300 border-opacity-80 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e12239633b81b08dbbba11fc2b2a4f1b124d33ee7def4e43a9c65637f1340761?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 w-4 aspect-square"
              />
              <div className="flex-1 max-md:max-w-full">
                Search your course here....
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-2 pl-6 mt-6 w-full bg-violet-600 rounded-3xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col my-auto">
              <div className="text-xs text-white uppercase">
                Online Course
              </div>
              <div className="mt-6 text-2xl font-semibold text-white">
                Sharpen Your Skills With
                <br />
                Professional Online Courses
              </div>
              <div className="flex gap-3 self-start px-3 py-2 mt-6 bg-neutral-800 rounded-[40px]">
                <div className="my-auto text-xs font-medium text-right text-white">
                  Join Now
                </div>
                <div className="flex justify-center items-center p-1.5 w-5 h-5 bg-white rounded-[50px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3499998aaa80a76d46f1391deae4a46d8b144d96b2667ee14194456ca0bc8c0?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="w-2 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-0 items-start">
              <div className="flex z-10 flex-col items-start self-end mt-5">
                <div className="flex z-10 gap-0 items-start ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/083381354f051b8b3eaecb6cd0616a5248f4c7d3238c7243987e7e6070f6fa8d?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 self-start aspect-[1.02] fill-white fill-opacity-10 w-[61px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c68fe8b895726ee2dbf7e890c38dbf5ec338813c4f66e5f4156859adf585a6a?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 self-end mt-6 w-20 aspect-square fill-white fill-opacity-30"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5e3296836ea2da9c30bd81e6d4ba3a95a3195f9a4ba5b11bbd85cf8522105bc?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-20 aspect-[1.35] fill-white fill-opacity-10"
                />
              </div>
              <div className="flex flex-col self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e9cf0ec54dadfbda78dd39418bdc258e0252c76ee1d445f2077f142f9d8f31?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="aspect-[1.03] fill-white fill-opacity-10 w-[61px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4bd4b65c6daed8d5216d8e81f281f992b32850a247f6e7aaa59eef022cf85cf?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="self-center mt-9 w-20 aspect-square fill-white fill-opacity-10"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 justify-center px-5 mt-6 max-md:flex-wrap">
            <div className="flex flex-1 gap-4 justify-center p-3 bg-white rounded-xl shadow-2xl max-md:px-5">
              <div className="flex justify-center items-center p-3 w-10 h-10 bg-violet-600 bg-opacity-20 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cacd1472e0bb50380405f97f11ad0713eb76995358f2bf1d9e0333e542b5e4c?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
              <div className="flex flex-col self-start text-xs">
                <div className="text-zinc-600">2/8 Watched</div>
                <div className="mt-2 font-semibold text-neutral-800">
                  Product Design
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c9b5bb7bb8d80f4adbe469f551cdf06a68f97c56236d4046a17daf8b93f7bc?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex flex-1 gap-4 justify-center p-3 bg-white rounded-xl shadow-2xl max-md:px-5">
              <div className="flex justify-center items-center p-3 w-10 h-10 bg-violet-600 bg-opacity-20 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7cab6f6447a59b12a02d9901374fcf09c0635a6c8d5a1accc9e3262fdcbb9a9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
              <div className="flex flex-col self-start text-xs">
                <div className="text-zinc-600">2/8 Watched</div>
                <div className="mt-2 font-semibold text-neutral-800">
                  Product Design
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1bf078b46117e52ea5c054fb67222a0763fccd7c211988d477637b21bb1182?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex flex-1 gap-4 justify-center p-3 bg-white rounded-xl shadow-2xl max-md:px-5">
              <div className="flex justify-center items-center p-3 w-10 h-10 bg-violet-600 bg-opacity-20 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/244aa9f6c8941e29687d0de2c5ffa74607edcdcfb4dbef36f6f7a97e3322dbbc?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
              <div className="flex flex-col self-start text-xs">
                <div className="text-zinc-600">2/8 Watched</div>
                <div className="mt-2 font-semibold text-neutral-800">
                  Product Design
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37cde922c86525a41c9ce649400fb127fe818e8aac01b1d2c4a7ed50bf049cd7?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex gap-0 justify-between px-5 mt-6 max-md:flex-wrap">
            <div className="flex-1 text-base font-medium capitalize text-neutral-800 max-md:max-w-full">
              Continue watching
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center p-1.5 border border-solid border-neutral-400 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf751c549ed194425b1dc7f17cc4d2925fc225e3e213df67e6748861dcdb93cf?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-3 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center p-1.5 border border-solid border-neutral-400 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2f08d7dcca3e7b2b8a0c2ce11a7a96573c1e2212b076d805412be71593f7f87?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-3 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="justify-center px-5 mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-3 mx-auto w-full bg-white rounded-3xl shadow-2xl max-md:mt-5">
                  <div className="flex overflow-hidden relative flex-col items-end px-16 pt-2.5 pb-20 aspect-[2.21] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c56553d9ef277875ff1c21115f343b83f2b4fe6ca43d2f58a1986f15e6b7529?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative justify-center items-center px-1.5 w-5 h-5 bg-stone-300 bg-opacity-50 rounded-[50px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca98f548b6824042d5c842721b5ebfac29fc9986440c756176d2a5b7187494f6?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                        className="w-full aspect-square"
                      />
                    </div>
                  </div>
                  <div className="justify-center px-3 py-1 mt-2.5 text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20">
                    Frontend
                  </div>
                  <div className="mt-2.5 text-sm font-medium capitalize text-neutral-800">
                    Beginner’s Guide to becoming a <br />
                    professional frontend developer
                  </div>
                  <div className="flex flex-col justify-center mt-2.5 bg-zinc-300 rounded-[50px]">
                    <div className="shrink-0 h-1.5 bg-violet-600 rounded-[50px]" />
                  </div>
                  <div className="flex gap-2 mt-2.5 capitalize rounded-none text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 bg-white">
                      <div className="text-xs font-medium">
                        Prashant Kumar singh
                      </div>
                      <div className="mt-1 text-xs">software Developer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-3 mx-auto w-full bg-white rounded-3xl shadow-2xl max-md:mt-5">
                  <div className="flex overflow-hidden relative flex-col items-end px-16 pt-2.5 pb-20 aspect-[2.21] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8a62b679623355f1c228e5b87552007e77903e52ef0d00e9793e5db5c9ebdc?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative justify-center items-center px-1.5 w-5 h-5 bg-stone-300 bg-opacity-50 rounded-[50px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca98f548b6824042d5c842721b5ebfac29fc9986440c756176d2a5b7187494f6?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                        className="w-full aspect-square"
                      />
                    </div>
                  </div>
                  <div className="justify-center px-3 py-1 mt-2.5 text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20">
                    Frontend
                  </div>
                  <div className="mt-2.5 text-sm font-medium capitalize text-neutral-800">
                    Beginner’s Guide to becoming a <br />
                    professional frontend developer
                  </div>
                  <div className="flex flex-col justify-center mt-2.5 bg-zinc-300 rounded-[50px]">
                    <div className="shrink-0 h-1.5 bg-violet-600 rounded-[50px]" />
                  </div>
                  <div className="flex gap-2 mt-2.5 capitalize rounded-none text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 bg-white">
                      <div className="text-xs font-medium">
                        Prashant Kumar singh
                      </div>
                      <div className="mt-1 text-xs">software Developer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-3 mx-auto w-full bg-white rounded-3xl shadow-2xl max-md:mt-5">
                  <div className="flex overflow-hidden relative flex-col items-end px-16 pt-2.5 pb-20 aspect-[2.21] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4fe8dfd1a6412ecb6ef8b40add5106f3ee8374cefbada2169b3207e7dfa58?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative justify-center items-center px-1.5 w-5 h-5 bg-stone-300 bg-opacity-50 rounded-[50px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca98f548b6824042d5c842721b5ebfac29fc9986440c756176d2a5b7187494f6?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                        className="w-full aspect-square"
                      />
                    </div>
                  </div>
                  <div className="justify-center px-3 py-1 mt-2.5 text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20">
                    Frontend
                  </div>
                  <div className="mt-2.5 text-sm font-medium capitalize text-neutral-800">
                    Beginner’s Guide to becoming a <br />
                    professional frontend developer
                  </div>
                  <div className="flex flex-col justify-center mt-2.5 bg-zinc-300 rounded-[50px]">
                    <div className="shrink-0 h-1.5 bg-violet-600 rounded-[50px]" />
                  </div>
                  <div className="flex gap-2 mt-2.5 capitalize rounded-none text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 bg-white">
                      <div className="text-xs font-medium">
                        Prashant Kumar singh
                      </div>
                      <div className="mt-1 text-xs">software Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 justify-between pr-5 mt-6 capitalize max-md:flex-wrap">
            <div className="flex-1 text-base font-medium text-neutral-800 max-md:max-w-full">
              Your Mentor
            </div>
            <div className="my-auto text-xs text-right text-blue-600 underline">
              See All
            </div>
          </div>
          <div className="flex flex-col px-6 py-5 mt-5 capitalize bg-white rounded-xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-center text-xs font-semibold uppercase text-neutral-700 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-1">instructor name & date</div>
              <div className="text-center">COURSE TYPE</div>
              <div className="flex-1 text-center">COURSE TITLE</div>
              <div className="text-center">ACTIONS</div>
            </div>
            <div className="flex gap-5 items-center mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-1 gap-2 justify-center self-stretch">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-medium text-neutral-800">
                    Prashant Kumar Singh
                  </div>
                  <div className="mt-1 text-xs text-zinc-600">25/2/2023</div>
                </div>
              </div>
              <div className="justify-center self-stretch p-3 my-auto text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20">
                Frontend
              </div>
              <div className="flex-1 self-stretch my-auto text-xs text-center text-neutral-800">
                Understanding Concept of React
              </div>
              <div className="justify-center self-stretch p-3 my-auto text-xs text-blue-600 uppercase rounded-lg bg-blue-600 bg-opacity-20">
                SHOW DETAILS
              </div>
            </div>
            <div className="flex gap-5 items-center mt-6 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-1 gap-2 justify-center self-stretch">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/828a8de5b2251cc13edcac673ccaddc885d4d277b217961f56803c5783b8f6c9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-medium text-neutral-800">
                    ravi Kumar
                  </div>
                  <div className="mt-1 text-xs text-zinc-600">25/2/2023</div>
                </div>
              </div>
              <div className="justify-center self-stretch p-3 my-auto text-xs text-violet-600 uppercase whitespace-nowrap rounded-lg bg-violet-600 bg-opacity-20">
                Frontend
              </div>
              <div className="flex-1 self-stretch my-auto text-xs text-center text-neutral-800">
                Understanding Concept of React
              </div>
              <div className="justify-center self-stretch p-3 my-auto text-xs text-blue-600 uppercase rounded-lg bg-blue-600 bg-opacity-20">
                SHOW DETAILS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch px-6 py-8 mx-auto w-full bg-white rounded-none shadow-2xl max-md:px-5 max-md:mt-8">
          <div className="flex gap-5 justify-between text-base font-medium capitalize text-neutral-800">
            <div>Your Profie</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65c52476cbf1293a3450dc7d3e7ccf1f42e19846fea1c6c6bafca3e1476dc305?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex flex-col justify-center px-5 mt-9">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97fc590e0741e036fd27bafb374a5ff69fbeef70ba4c69b4e422800410cb4dd3?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="self-center max-w-full aspect-square w-[100px]"
            />
            <div className="mt-4 text-base font-medium text-center capitalize text-neutral-800">
              good Morning{" "}
            </div>
            <div className="mt-1.5 text-xs font-medium text-center capitalize text-zinc-500">
              continue your journey and achieve Your Target
            </div>
            <div className="flex gap-5 pr-6 mt-4 max-md:pr-5">
              <div className="flex justify-center items-center p-3 border border-solid border-neutral-400 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ae41852e9552d1ed5f23764f61d517d5a25e60649b53f090462250a54086ecc?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center p-3 border border-solid border-neutral-400 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dad9ced6274a8c606efbc29311deabdce7b917d590618e24fcaff1eca13da575?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center p-3 border border-solid border-neutral-400 rounded-[50px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dad9ced6274a8c606efbc29311deabdce7b917d590618e24fcaff1eca13da575?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                  className="w-4 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-start pt-2 pr-7 mt-9 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54f0de2bc75fdf12a75268625851866ef657671954fe158a575650e13955d44?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="flex-1 shrink-0 self-end mt-16 w-full aspect-[0.78] max-md:mt-10"
            />
            <div className="flex flex-col flex-1 self-end mt-9">
              <div className="shrink-0 bg-purple-100 rounded h-[9px]" />
              <div className="shrink-0 bg-violet-200 h-[17px]" />
              <div className="shrink-0 bg-purple-400 h-[15px]" />
              <div className="shrink-0 bg-purple-600 h-[31px] w-[31px]" />
            </div>
            <div className="flex flex-col flex-1 mt-4">
              <div className="shrink-0 bg-purple-100 rounded h-[11px]" />
              <div className="shrink-0 bg-violet-200 h-[21px]" />
              <div className="shrink-0 bg-purple-400 h-[19px]" />
              <div className="shrink-0 h-10 bg-purple-600" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="shrink-0 bg-purple-100 rounded h-[11px]" />
              <div className="shrink-0 bg-violet-200 h-[26px]" />
              <div className="shrink-0 h-6 bg-purple-400" />
              <div className="shrink-0 bg-purple-600 h-[47px]" />
            </div>
            <div className="flex flex-col flex-1 mt-3.5">
              <div className="shrink-0 bg-purple-100 rounded h-[11px]" />
              <div className="shrink-0 bg-violet-200 h-[22px]" />
              <div className="shrink-0 h-5 bg-purple-400" />
              <div className="shrink-0 bg-purple-600 h-[42px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-9">
            <div className="text-base font-medium capitalize text-neutral-800">
              Your Mentor
            </div>
            <div className="flex justify-center items-center p-1.5 border border-solid border-neutral-400 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1c2343f47b11cf352a0af4fb7e010c7588f68d285635f493f5c49444a99d85?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="w-3 aspect-square"
              />
            </div>
          </div>
          <div className="justify-center items-center px-3 py-2 mt-3 text-xs font-medium text-right text-violet-600 bg-violet-600 bg-opacity-20 rounded-[40px] max-md:px-5">
            See All
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard
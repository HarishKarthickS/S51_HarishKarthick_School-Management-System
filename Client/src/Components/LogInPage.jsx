import {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function LogInPage() {
    const [userName,setUserName] = useState(getCookie('username'))
    const [password,setPassword] = useState(getCookie('password'))
    const navigate = useNavigate();
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }
        const submit=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:3000/login',{
                name:userName,
                password:password
            }).then((response)=>{
            setCookie('token', response.data.accessToken,365);
            setCookie('username', userName,365);
        navigate('/')}).catch((error)=>{console.error(error)});

        }
        return(
        
        <div className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow items-start pb-20 min-h-[900px] max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a30ab0bf0e6e8f51ac63e6540c0ff0db69f110d1c65d2988ac2990a6d6e217e?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e638cec97858e40612b77429168ffbd966b79e3ba3010259230ed98d51ba23e9?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="max-w-full aspect-[2.5] w-[333px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-medium max-md:max-w-full">
              Sign in
            </div>
            <div className="mt-8 text-base max-md:max-w-full">
              If you don’t have an account register
            </div>
            <div className="mt-3.5 text-base text-red-500 max-md:max-w-full">
              You can{" "}
              <span className="font-semibold text-red-500">
                <Link to='/signup'>Register here !</Link>
              </span>
            </div>
            <div className="mt-14 text-sm font-medium max-md:mt-10 max-md:max-w-full">
              Email
            </div>
            <div className="flex gap-2.5 self-start mt-5 text-base">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab9c7377364587cc4c9fa34bfa9a6ae95840d2a3505c5846a80e93e7974c5ab5?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 self-start aspect-square w-[17px]"
              />
              <div className="flex-auto"><input type="email" name="email" className='max-w-[100%]' id="email" onChange={(e)=>{setUserName(e.target.value)}} placeholder='Enter your email address' /></div>
            </div>
            <div className="shrink-0 mt-2.5 h-0.5 bg-red-500 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-sm font-medium">Password</div>
                <div className="flex gap-2 mt-5 text-base">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e348527284460056c21a2acdff906b4204b0f4ba2b98100bad059beb110759?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                    className="shrink-0 self-start aspect-square w-[17px]"
                  />
                  <div className="flex-auto"><input type="password" name="Password" id="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your Password'/></div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ac090533feb1f7a66a5ccfb468c155f3be9a22273834f04bc33088209dd646?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
                className="shrink-0 self-end mt-9 w-3.5 aspect-square"
              />
            </div>
            <div className="shrink-0 mt-2.5 h-0.5 bg-black max-md:max-w-full" />
            <div className="flex gap-5 mt-5 w-full text-xs font-light max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-1 gap-2.5">
                <div className="shrink-0 bg-white border border-black border-solid h-[15px] w-[15px]" />
                <div>Rememebr me</div>
              </div>
              <div className="flex-auto">Forgot Password ?</div>
            </div>
            <div className="justify-center items-center px-16 py-5 mt-16 text-lg font-medium text-white whitespace-nowrap bg-red-500 shadow-lg rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <button onClick={submit}>Login</button>
            </div>
            <div className="self-center mt-11 text-base font-medium text-zinc-400 max-md:mt-10">
              or continue with
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/721955f180fb231925cf5d84358a46c363e261a29f9da9d9ec43998d23648767?apiKey=4e5d0bc76b634857bbc459659ac90f99&"
              className="self-center mt-9 max-w-full aspect-[3.85] w-[165px]"
            />
          </div>
        </div>
      </div>
    </div>
        )
    
}

export default LogInPage
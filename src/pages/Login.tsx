
import image from '../assets/Image.png'


const braches=[
    {
        name:"Kigali",
        "id":1
    },
    {
        name:"Musanze",
        "id":2
    },
    {
        name:"Nyabihu",
        "id":3
    },
    {
        name:"Kayonza",
        "id":4
    }
]
const Login = () => {

    const handleFormSubmission=()=>{
    console.log("Logged in");
    
    }
    return (
        <div className="flex h-screen">
             <div className="w-1/2 bg-white flex flex-col justify-center px-16">
              <h2 className="text-3xl font-bold mb-4">Branch Login</h2>
               <p className="mb-6 text-gray-600">Enter your email and password to log in!</p> 
               <select className="mb-4 p-3 border border-gray-300 rounded-lg">
                 <option value="">Select your Branch...</option>
                 {braches.map((brach)=>(
                    <option value={brach.name} key={brach.id}>{brach.name}</option>
                 ))}
                  {/* Add your branch options here */} </select>
                   <input type="email" placeholder="Email" className="mb-4 p-3 border border-gray-300 rounded-lg" required />
                    <input type="password" placeholder="Password" className="mb-4 p-3 border border-gray-300 rounded-lg" required /> 
                    <div className="flex justify-between items-center mb-6"> 
                        <label className="flex items-center text-gray-600">
                             <input type="checkbox" className="mr-2" /> Keep me logged in </label> 
                             <a href="/forgot-password" className="text-blue-500">Forget password?</a>
                              </div>
                               <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700">Login</button>
                               </div> <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} /> </div>
    );
  };
  
  export default Login;
  
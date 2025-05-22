// import React, { useState } from 'react';
// import { Eye, EyeOff, User, Mail, Lock, GraduationCap, Video, Users } from 'lucide-react';

// export default function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     university: '',
//     major: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Default test accounts
//   const defaultAccounts = [
//     { email: 'himanshukumar', password: '123', name: 'Himanshu Kumar' },
//     { email: 'sachinkumar', password: '1234', name: 'Sachin Kumar' }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Check against default accounts
//       const account = defaultAccounts.find(
//         acc => acc.email === formData.email && acc.password === formData.password
//       );
      
//       if (account) {
//         alert(`Welcome back, ${account.name}! Login successful.`);
//         console.log('Login successful:', account);
//       } else {
//         alert('Invalid credentials. Try:\nID: himanshukumar, Password: 123\nOR\nID: sachinkumar, Password: 1234');
//       }
//     } else {
//       console.log('Signup attempt:', formData);
//       alert('Account created successfully! You can now login.');
//       setIsLogin(true);
//     }
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       fullName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       university: '',
//       major: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <div className="relative w-full max-w-4xl mx-auto">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Left Side - Branding */}
//             <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 lg:p-12 text-white relative overflow-hidden">
//               <div className="relative z-10">
//                 <div className="flex items-center mb-8">
//                   <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-3">
//                     <Video className="w-6 h-6" />
//                   </div>
//                   <h1 className="text-2xl font-bold">InterviewAce</h1>
//                 </div>
                
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
//                   Master Your Interview Skills
//                 </h2>
//                 <p className="text-blue-100 mb-8 text-lg leading-relaxed">
//                   Practice with AI-powered mock interviews, get real-time feedback, and land your dream job with confidence.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
//                       <GraduationCap className="w-4 h-4" />
//                     </div>
//                     <span>Tailored for students and graduates</span>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
//                       <Video className="w-4 h-4" />
//                     </div>
//                     <span>AI-powered mock interviews</span>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
//                       <Users className="w-4 h-4" />
//                     </div>
//                     <span>Join thousands of successful candidates</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
//             </div>

//             {/* Right Side - Form */}
//             <div className="lg:w-1/2 p-8 lg:p-12">
//               <div className="max-w-sm mx-auto">
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {isLogin ? 'Welcome Back!' : 'Create Account'}
//                   </h3>
//                   <p className="text-gray-600">
//                     {isLogin 
//                       ? 'Sign in to continue your interview preparation journey' 
//                       : 'Join thousands of students mastering their interviews'
//                     }
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   {!isLogin && (
//                     <div className="space-y-4">
//                       <div className="relative">
//                         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <input
//                           type="text"
//                           name="fullName"
//                           placeholder="Full Name"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                           className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                           required={!isLogin}
//                         />
//                       </div>
                      
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <input
//                           type="text"
//                           name="university"
//                           placeholder="University"
//                           value={formData.university}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                         />
//                         <input
//                           type="text"
//                           name="major"
//                           placeholder="Major/Field"
//                           value={formData.major}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                       required
//                     />
//                   </div>

//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                     >
//                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>

//                   {!isLogin && (
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                         className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                         required={!isLogin}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                       >
//                         {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                       </button>
//                     </div>
//                   )}

//                   {isLogin && (
//                     <div className="flex items-center justify-between text-sm">
//                       <label className="flex items-center">
//                         <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
//                         <span className="ml-2 text-gray-600">Remember me</span>
//                       </label>
//                       <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
//                         Forgot password?
//                       </a>
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//                   >
//                     {isLogin ? 'Sign In' : 'Create Account'}
//                   </button>

//                   <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                       <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                       <span className="px-4 bg-white text-gray-500">Or continue with</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <button
//                       type="button"
//                       className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
//                     >
//                       <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5 mr-2" />
//                       Google
//                     </button>
//                     <button
//                       type="button"
//                       className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
//                     >
//                       <img src="/api/placeholder/20/20" alt="LinkedIn" className="w-5 h-5 mr-2" />
//                       LinkedIn
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <p className="text-gray-600">
//                     {isLogin ? "Don't have an account? " : "Already have an account? "}
//                     <button
//                       onClick={toggleMode}
//                       className="text-blue-600 hover:text-blue-700 font-semibold"
//                     >
//                       {isLogin ? 'Sign up' : 'Sign in'}
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
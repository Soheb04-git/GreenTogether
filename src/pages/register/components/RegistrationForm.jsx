// //src/pages/register/components/RegistrationForm.jsx

// import React, { useState } from 'react';
// import Input from '../../../components/ui/Input';
// import Select from '../../../components/ui/Select';
// import Button from '../../../components/ui/Button';
// import Icon from '../../../components/AppIcon';

// const RegistrationForm = ({ onSubmit, loading, error, success }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     role: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});

  
//   const roleOptions = [
//     { value: 'citizen', label: 'Citizen' },
//     { value: 'waste-worker', label: 'Waste Worker' },
//     { value: 'green-champion', label: 'Green Champion' },
//     { value: 'ulb-admin', label: 'ULB Admin' }
//   ];

//   const validateForm = () => {
//     const errors = {};
    
//     if (!formData?.fullName?.trim()) {
//       errors.fullName = 'Full name is required';
//     } else if (formData?.fullName?.trim()?.length < 2) {
//       errors.fullName = 'Full name must be at least 2 characters';
//     }

//     if (!formData?.email?.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
//       errors.email = 'Please enter a valid email address';
//     }

//     if (!formData?.password) {
//       errors.password = 'Password is required';
//     } else if (formData?.password?.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/?.test(formData?.password)) {
//       errors.password = 'Password must contain uppercase, lowercase, and number';
//     }

//     if (!formData?.role) {
//       errors.role = 'Please select a role';
//     }

//     setValidationErrors(errors);
//     return Object.keys(errors)?.length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
    
//     // Clear validation error when user starts typing
//     if (validationErrors?.[field]) {
//       setValidationErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e?.preventDefault();
//     if (validateForm()) {
//       onSubmit(formData);
//     }
//   };

//   const getPasswordStrength = () => {
//     const password = formData?.password;
//     if (!password) return { strength: 0, label: '' };
    
//     let strength = 0;
//     if (password?.length >= 8) strength++;
//     if (/[a-z]/?.test(password)) strength++;
//     if (/[A-Z]/?.test(password)) strength++;
//     if (/\d/?.test(password)) strength++;
//     if (/[^a-zA-Z\d]/?.test(password)) strength++;

//     const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
//     const colors = ['', 'text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-emerald-600'];
    
//     return { 
//       strength, 
//       label: labels?.[strength], 
//       color: colors?.[strength],
//       percentage: (strength / 5) * 100 
//     };
//   };

//   const passwordStrength = getPasswordStrength();

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <Input
//         label="Full Name"
//         type="text"
//         placeholder="Enter your full name"
//         value={formData?.fullName}
//         onChange={(e) => handleInputChange('fullName', e?.target?.value)}
//         error={validationErrors?.fullName}
//         required
//         className="mb-4"
//       />
//       <Input
//         label="Email Address"
//         type="email"
//         placeholder="Enter your email address"
//         value={formData?.email}
//         onChange={(e) => handleInputChange('email', e?.target?.value)}
//         error={validationErrors?.email}
//         required
//         className="mb-4"
//       />
//       <div className="space-y-2">
//         <div className="relative">
//           <Input
//             label="Password"
//             type={showPassword ? "text" : "password"}
//             placeholder="Create a strong password"
//             value={formData?.password}
//             onChange={(e) => handleInputChange('password', e?.target?.value)}
//             error={validationErrors?.password}
//             required
//             className="mb-2"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <Icon 
//               name={showPassword ? "EyeOff" : "Eye"} 
//               size={20} 
//             />
//           </button>
//         </div>
        
//         {formData?.password && (
//           <div className="space-y-2">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-600">Password strength:</span>
//               <span className={`font-medium ${passwordStrength?.color}`}>
//                 {passwordStrength?.label}
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div 
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   passwordStrength?.strength <= 1 ? 'bg-red-500' :
//                   passwordStrength?.strength <= 2 ? 'bg-orange-500' :
//                   passwordStrength?.strength <= 3 ? 'bg-yellow-500' :
//                   passwordStrength?.strength <= 4 ? 'bg-green-500' : 'bg-emerald-600'
//                 }`}
//                 style={{ width: `${passwordStrength?.percentage}%` }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//       <Select
//         label="Role"
//         placeholder="Select your role"
//         options={roleOptions}
//         value={formData?.role}
//         onChange={(value) => handleInputChange('role', value)}
//         error={validationErrors?.role}
//         required
//         className="mb-6"
//       />
//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
//           <Icon name="AlertCircle" size={20} color="#dc2626" />
//           <p className="text-red-700 text-sm">{error}</p>
//         </div>
//       )}
//       {success && (
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
//           <Icon name="CheckCircle" size={20} color="#059669" />
//           <p className="text-green-700 text-sm">{success}</p>
//         </div>
//       )}
//       <Button
//         type="submit"
//         variant="default"
//         size="lg"
//         fullWidth
//         loading={loading}
//         iconName="UserPlus"
//         iconPosition="left"
//         className="mt-6"
//       >
//         Create Account
//       </Button>
//     </form>
//   );
// };

// export default RegistrationForm;

// src/pages/register/components/RegistrationForm.jsx
// ✅ Removed green-champion role

import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RegistrationForm = ({ onSubmit, loading, error, success }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const roleOptions = [
    { value: 'citizen', label: 'Citizen' },
    { value: 'waste-worker', label: 'Waste Worker' }
    //{ value: 'ulb-admin', label: 'ULB Admin' }
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    else if (formData.fullName.trim().length < 2) errors.fullName = 'Full name must be at least 2 characters';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address';
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) errors.password = 'Password must contain uppercase, lowercase, and number';
    if (!formData.role) errors.role = 'Please select a role';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field]) setValidationErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '' };
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    const colors = ['', 'text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-emerald-600'];
    return { strength, label: labels[strength], color: colors[strength], percentage: (strength/5)*100 };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input label="Full Name" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} error={validationErrors.fullName} required className="mb-4" />
      <Input label="Email Address" type="email" placeholder="Enter your email address" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} error={validationErrors.email} required className="mb-4" />

      <div className="space-y-2 relative">
        <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" value={formData.password} onChange={e => handleInputChange('password', e.target.value)} error={validationErrors.password} required className="mb-2" />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors">
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
        </button>

        {formData.password && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Password strength:</span>
              <span className={`font-medium ${passwordStrength.color}`}>{passwordStrength.label}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.strength <= 1 ? 'bg-red-500' : passwordStrength.strength <= 2 ? 'bg-orange-500' : passwordStrength.strength <= 3 ? 'bg-yellow-500' : passwordStrength.strength <= 4 ? 'bg-green-500' : 'bg-emerald-600'}`} style={{ width: `${passwordStrength.percentage}%` }} />
            </div>
          </div>
        )}
      </div>

      <Select label="Role" placeholder="Select your role" options={roleOptions} value={formData.role} onChange={value => handleInputChange('role', value)} error={validationErrors.role} required className="mb-6" />

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"><Icon name="AlertCircle" size={20} color="#dc2626" /><p className="text-red-700 text-sm">{error}</p></div>}
      {success && <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3"><Icon name="CheckCircle" size={20} color="#059669" /><p className="text-green-700 text-sm">{success}</p></div>}

      <Button type="submit" variant="default" size="lg" fullWidth loading={loading} iconName="UserPlus" iconPosition="left" className="mt-6">Create Account</Button>
    </form>
  );
};

export default RegistrationForm;

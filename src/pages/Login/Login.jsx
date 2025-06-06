import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/login/google';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      const { role, name, username: userName, token } = res.data;

      // Lưu token vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('username', userName);
      localStorage.setItem('name', name);

      alert(`Đăng nhập thành công! Xin chào ${name || userName}`);

      // Chuyển hướng theo vai trò
      if (role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
      <main className="w-full max-w-md flex flex-col items-center">
        <img
          alt="Logo"
          className="mb-6"
          height="48"
          loading="lazy"
          src="src/assets/Logo.png"
          width="48"
        />

        <h1 className="text-center text-black text-xl font-medium mb-4">
          Welcome to TestYourself
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-xs mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-2 px-4 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full max-w-xs flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          {/* SVG Google icon */}
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            {/* paths... */}
          </svg>
          Login with Google
        </button>

        <p className="mt-4 text-sm text-gray-700">
          Bạn chưa có tài khoản?{' '}
          <span
            className="text-emerald-600 font-semibold hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Đăng ký
          </span>
        </p>

        <p className="mt-4 text-center text-xs text-gray-600 max-w-xs">
          Proceeding means you've agreed to our{' '}
          <a className="text-emerald-600 underline" href="#">
            terms & conditions
          </a>
        </p>
      </main>
    </div>
  );
};

export default Login;

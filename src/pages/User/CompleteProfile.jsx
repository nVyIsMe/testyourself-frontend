import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompleteProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");

    if (!user_id) {
      alert("Thiếu thông tin người dùng.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/update-profile", {
        user_id,
        username,
        password,
        name,
      });

      alert("Cập nhật thành công! Bạn có thể đăng nhập lần sau bằng username và password.");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Có lỗi xảy ra khi cập nhật.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Hoàn thiện hồ sơ người dùng
        </h2>

        <input
          type="text"
          placeholder="Tên hiển thị"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
        >
          Hoàn tất
        </button>
      </form>
    </div>
  );
}

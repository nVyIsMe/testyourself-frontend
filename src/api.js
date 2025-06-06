// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Đảm bảo URL này đúng với backend của bạn
});

// Interceptor tự động thêm token JWT vào header Authorization nếu có token trong localStorage
API.interceptors.request.use(
  (config) => {
    // Log khi interceptor bắt đầu làm việc
    console.log("--- AXIOS REQUEST INTERCEPTOR START ---");
    console.log("Original request config URL:", config.url);
    console.log("Original request config method:", config.method);

    // Lấy token từ localStorage
    const token = localStorage.getItem("token");
    console.log("Token retrieved from localStorage:", token);

    // Kiểm tra xem token có tồn tại không
    if (token) {
      // Nếu có token, gán vào header Authorization
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Authorization header SET with token:", config.headers.Authorization);
    } else {
      // Nếu không có token, log cảnh báo
      console.warn("No token found in localStorage. Authorization header NOT set.");
    }

    // Log toàn bộ config object (bao gồm cả headers) trước khi gửi đi
    // Bạn có thể bỏ comment dòng này nếu muốn xem chi tiết, nhưng nó có thể khá dài
    // console.log("Full request config before sending:", JSON.stringify(config, null, 2));
    
    console.log("--- AXIOS REQUEST INTERCEPTOR END ---");
    return config; // Trả về config đã được sửa đổi (hoặc không)
  },
  (error) => {
    // Log lỗi nếu có vấn đề trong quá trình thiết lập request
    console.error("--- AXIOS REQUEST INTERCEPTOR ERROR ---");
    console.error("Error in request interceptor:", error);
    console.error("Error config:", error.config);
    console.error("--- AXIOS REQUEST INTERCEPTOR ERROR END ---");
    return Promise.reject(error); // Chuyển tiếp lỗi
  }
);

// --- Định nghĩa các hàm gọi API ---

// Courses
export const getAllCourses = () => {
  console.log("API CALL: getAllCourses triggered");
  return API.get("/courses");
};

export const getCourseById = (id) => {
  console.log(`API CALL: getCourseById triggered for ID: ${id}`);
  return API.get(`/courses/${id}`);
};

export const createCourse = (data) => {
  console.log("API CALL: createCourse triggered with data:", data);
  return API.post("/courses", data);
};

export const updateCourse = (id, data) => {
  console.log(`API CALL: updateCourse triggered for ID: ${id} with data:`, data);
  return API.put(`/courses/${id}`, data);
};

export const deleteCourse = (id) => {
  console.log(`API CALL: deleteCourse triggered for ID: ${id}`);
  return API.delete(`/courses/${id}`);
};

// Cards (Questions)
export const addCardToCourse = (courseId, data) => {
  console.log(`API CALL: addCardToCourse triggered for CourseID: ${courseId} with data:`, data);
  return API.post(`/courses/${courseId}/cards`, data);
};

export const updateCard = (cardId, data) => {
  console.log(`API CALL: updateCard triggered for CardID: ${cardId} with data:`, data);
  return API.put(`/cards/${cardId}`, data);
};

export const deleteCard = (cardId) => {
  console.log(`API CALL: deleteCard triggered for CardID: ${cardId}`);
  return API.delete(`/cards/${cardId}`);
};

// Export instance API nếu bạn muốn sử dụng nó trực tiếp ở nơi khác (ví dụ: API.get(...))
// Tuy nhiên, thường thì chỉ export các hàm đã định nghĩa sẵn.
export default API;
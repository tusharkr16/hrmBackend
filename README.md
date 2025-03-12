# HRMS Backend - README

## 📌 Project Overview
This is the backend API for a **Mini HRMS System** built using **Node.js, Express, MongoDB, and JWT authentication**. The system includes employee management, attendance tracking, leave approval, and payroll calculations.

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/hrms-backend.git
cd hrms-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` File
```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```bash
npm start  # Production Mode
npm run dev  # Development Mode with Nodemon
```

---

## 🔐 Authentication & User Management

### **1️⃣ User Registration**
- **Endpoint:** `POST /api/auth/register`
- **Payload:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword",
    "role": "Employee"
  }
  ```
- **Response:** Returns user data with JWT token.

### **2️⃣ User Login**
- **Endpoint:** `POST /api/auth/login`
- **Payload:**
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response:** Returns JWT token & user role.

---

## ⏱️ Attendance Management

### **3️⃣ Check-In**
- **Endpoint:** `POST /api/attendance/check-in`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Payload:**
  ```json
  {
    "checkInTime": "2025-03-12T09:00:00Z"
  }
  ```

### **4️⃣ Check-Out**
- **Endpoint:** `POST /api/attendance/check-out`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Payload:**
  ```json
  {
    "checkOutTime": "2025-03-12T18:00:00Z"
  }
  ```

### **5️⃣ HR View Attendance**
- **Endpoint:** `GET /api/attendance/all`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Response:** List of all employees' check-in/out data.

---

## 🏖️ Leave Management

### **6️⃣ Apply for Leave**
- **Endpoint:** `POST /api/leaves/apply`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Payload:**
  ```json
  {
    "leaveType": "Sick Leave",
    "startDate": "2025-03-15",
    "endDate": "2025-03-17",
    "reason": "Medical emergency"
  }
  ```

### **7️⃣ HR Approve/Reject Leave**
- **Endpoint:** `PUT /api/leaves/update/:leaveId`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Payload:**
  ```json
  {
    "status": "Approved"
  }
  ```

---

## 💰 Payroll Management

### **8️⃣ Generate Payroll (HR Only)**
- **Endpoint:** `POST /api/payroll/generate`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Payload:**
  ```json
  {
    "employeeId": "65f97d3c9a9f6a001c3e5678",
    "baseSalary": 50000,
    "month": "3",
    "year": 2025
  }
  ```

### **9️⃣ Get Payroll for HR**
- **Endpoint:** `GET /api/payroll/all`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Response:** List of all employee payrolls.

### **🔟 Get Payroll for Employee**
- **Endpoint:** `GET /api/payroll/my-payroll`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`
- **Response:** Payroll details for the logged-in employee.

---

## 🌐 Deployment
### **Backend API Deployment**
- Push code to GitHub
- Deploy on Render/Vercel
- Example:
  ```bash
  git push origin main
  ```
- Backend API URL: `https://your-api-url.com`

---

## 📩 Postman Collection
- Import `postman_collection.json` to test APIs.

---

## ✅ Summary
- User Authentication (Register/Login with JWT)
- Attendance (Clock-In, Clock-Out, HR View)
- Leave Management (Apply, Approve/Reject)
- Payroll (Salary Calculation, HR & Employee View)
- Secure with Role-Based Access Control (RBAC)

### 🚀 **Project Completed Successfully!**


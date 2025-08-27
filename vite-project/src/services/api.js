import axios from "axios";

const API_URL = "https://worker-project.onrender.com";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 
    "Content-Type": "application/json",
  },
});

// Submit feedback
export const submitFeedback = async (feedbackData , token) => {
    try {
        const response = await api.post("/feedback", feedbackData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error submitting feedback:", error);
        throw error;
    }
};

// login user
export const loginUser = async (credentials) => {
    try {
        const response = await api.post("/login", credentials);
        return response;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

//signup user send otp 
export const signupOtp = async (userData) => {
    try {
        console.log(userData)
        const response = await api.post("/send-otp", userData);
        return response;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

// signup user form
export const signupUser = async (userData) => {
    try {
        const response = await api.post("/signup", userData);
        return response;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

// report issue
export const reportIssue = async (issueData , token) => {
    try {
        const response = await api.post("/report-issue", issueData , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error reporting issue:", error);
        throw error;
    }
};

// worker delete 
export const deleteWorker = async (workerId, token) => {
    try {
        const response = await api.delete(`/workers/${workerId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting worker:", error);
        throw error;
    }
};

// add worker form
export const addWorker = async (workerData, token) => {
    try {
        const response = await api.post("/add", workerData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error adding worker:", error);
        throw error;
    }
};

// display workers
export const getWorkers = async (token) => {
    try {
        const response = await api.get("/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error fetching workers:", error);
        throw error;
    }
};

import axios from "axios";

export default {
    getMessage: function() {
        return axios.get("/api/message");
    },
    deleteMessage: function(id) {
        return axios.delete("/api/message/" + id);
    },
    saveMessage: function(data) {
        return axios.post("/api/message", data);
    }
};

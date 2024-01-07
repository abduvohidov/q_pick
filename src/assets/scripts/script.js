import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CheckToken() {
    const redirect = useNavigate();

    useEffect(() => {

        let token = localStorage.getItem("token");

        if (!token) {
            // localStorage.clear();
            redirect("/login");
        }

    }, []);
}
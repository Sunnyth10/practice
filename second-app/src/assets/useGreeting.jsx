import { useState, useEffect } from "react";

export default function useGreeting() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour < 12) {
            setGreeting("Good morning everyone");
        } else if (hour < 18) {
            setGreeting("Good afternoon everyone");
        } else {
            setGreeting("Good evening everyone");
        }
    }, []);

    return greeting;
}
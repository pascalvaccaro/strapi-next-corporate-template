const API_URL = process.env.API_URL || 'http://localhost:1337';

export const fetchPage = <T>(pageUrl) =>
    fetch(new URL(pageUrl, API_URL).toString())
        .then<T>(async res => {
            if (!res.ok) return { error: await res.text() };

            return res.json();
        });
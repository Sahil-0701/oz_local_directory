const  API_ENDPOINT = 'http://localhost:3000'

export async function sendCodeAction(email) {
    const url = `${API_ENDPOINT}/send-code`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
    });
    const data = await response.json();
    return data;
}
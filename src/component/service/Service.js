export const getAllWod = async () => {

    const response = await fetch('http://localhost:4000/posts');
    return await response.json();
}

export const createWod = async (data) => {
    const response = await fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}


export const deleteWod = async (id) => {
    const response = await fetch(`http://localhost:4000/posts/id/${id}`, {
        method: "DELETE",
    })
    return await response.json();
}

export const patchWod = async (id, data) => {
    const response = await fetch(`http://localhost:4000/posts/id/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
    return await response.json();
}
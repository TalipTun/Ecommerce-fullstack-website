export async function getItems() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;  // Ensure the data is returned
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;  // Return null in case of error
    }
}


async function getMovies() {
    try {
        // 1. Get the search term from the search box,
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        let name = document.getElementById("text").value;
        const url = "https://www.omdbapi.com/?apikey=ebc523d5&s=" + name;
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        const movieHolder = document.getElementById("movieHolder");

        for (const movie of json.Search) {
            // Create a div to hold each image and title
            const card = document.createElement("div");

            // Give the div the css class of CARD
            card.classList.add("card");

            // Create an image element
            const img = document.createElement("img");

            // Point it to the image from this movie
            img.src = movie.Poster;

            // Create a CONTAINER div to hold the title and year.
            const container = document.createElement("div");

            // Give the CONTAINER div the style of container
            container.classList.add("container");

            const title = document.createElement("h4");
            title.textContent = movie.Title;

            const year = document.createElement("p");
            year.textContent = movie.Year;

            container.append(title);
            container.append(year);

            card.append(img);

            // Add the CONTAINER to the CARD
            card.append(container);

            // Add all the elements to the movieHolder element
            movieHolder.append(card);
        }
    }
    catch (error) {
        console.log(error);
    }
}
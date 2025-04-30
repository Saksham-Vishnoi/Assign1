const author = document.getElementById("author");
    const quote = document.getElementById("quote");
    let currentQuote = "";
    let currentAuthor = "";

    async function getQuote() {
      const res = await fetch("quotes.json");
      const quotes = await res.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const data = quotes[randomIndex];
      currentQuote = data.content;
      currentAuthor = data.author;
      quote.innerHTML = `"${currentQuote}"`;
      author.innerHTML = `— ${currentAuthor}`;
    }

    // function postToTwitter() {
    //   const text = `"${currentQuote}" — ${currentAuthor}`;
    //   const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    //   window.open(url, "_blank");
    // }

    // Load initial quote
    getQuote();
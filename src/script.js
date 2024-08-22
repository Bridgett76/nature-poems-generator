function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-topic");
  let apiKey = "75446f1f7d0612tcbfa113fo7a796523";
  let prompt = `User instructions: Generate a nature poem about ${topicInput.value}`;
  let context =
    "You are a creative Poem expert and love to write short poems. Your mission is to make a 6 line poem and separate each line with a </ br>. Please make sure to follow the user in structions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

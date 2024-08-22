function chatbot(input) {
    let output = "";
    const menu = {
        "oreo latte": "Oreo Latte: Rs 250",
        "espresso": "Espresso: Rs 95",
        "doppio": "Doppio: Rs 120",
        "latte": "Latte: Rs 175",
        "cappuccino": "Cappuccino: Rs 175",
        "americano": "Americano: Rs 135",
        "frappe": "Frappe: Rs 325",
        "hot chocolate": "Hot Chocolate: Rs 195",
        "blended mocha": "Blended Mocha: Rs 225",
        "ice latte": "Ice Latte: Rs 195",
        "iced americano": "Iced Americano: Rs 165",
        "mocha madness": "Mocha Madness: Rs 250"
    };

    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        output = "Hello there! How can I help you today?";
    } else if (input.includes("how are you")) {
        output = "I am doing great, thank you for asking! How about you?";
    } else if (input.includes("can i have the menu") || input.includes("coffee menu") || input.includes("your menu")) {
        output = `Welcome to Coffee Corner! Here is our coffee menu:\n
        - Oreo Latte: Rs 250\n
        - Espresso: Rs 95\n
        - Doppio: Rs 120\n
        - Latte: Rs 175\n
        - Cappuccino: Rs 175\n
        - Americano: Rs 135\n
        - Frappe: Rs 325\n
        - Hot Chocolate: Rs 195\n
        - Blended Mocha: Rs 225\n
        - Ice Latte: Rs 195\n
        - Iced Americano: Rs 165\n
        - Mocha Madness: Rs 250\n
        What would you like to have, sir/madam?`;
    } else if (input.includes("about coffee")) {
        output = "We are the top coffee shop in this location.";
    }else if (input.includes("can you help me ")) {
        output = "yes , how can i help you";
    } else if (input.includes("what is your name")) {
        output = "My name is Chatbot, but you can call me Chat. What is your name?";
    } else if (input.includes("what is your favorite coffee")) {
        output = "My favorite coffee is Cappuccino, but I also like Mocha and Frappe.";
    } else if (input.includes("what is your favorite food")) {
        output = "My favorite food is pizza, but I also like tacos and sushi.";
    } else if (input.includes("location") || input.includes("where are you located")) {
        output = "We are located at Galli, Lalitpur. Our contact number is +977 9828711925. We are open from 8 AM to 8 PM.";
    }else if (input.includes("location") || input.includes("where are you located")) {
        output = "We are located at Galli, Lalitpur. Our contact number is +977 9828711925. We are open from 8 AM to 8 PM.";
    } else if (input.includes("location map") || input.includes("map")) {
        output = "We are located at Galli, Lalitpur. Click to see the location.";
    } else if (input.includes("your number") || input.includes("your phone number")) {
        output = "+977 9828711925";
    } else {
        for (let item in menu) {
            if (input.includes(item)) {
                output = menu[item];
                break;
            }
        }
        if (!output) {
            output = "I'm not sure how to respond to that. Can you please provide more details?";
        }
    }
    return output;
}

// Display user message in the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerText = message;
    userMessage.appendChild(userText);
    userMessage.appendChild(userAvatar);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display bot message in the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerText = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send user message and get bot response
function sendUserMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displayBotMessage(output);
            document.getElementById("input").value = "";
        }, 1000);
    }
}

// Button event listener
document.getElementById("button").addEventListener("click", () => {
    sendUserMessage();
});

// Input key event listener
document.getElementById("input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendUserMessage();
    }
});

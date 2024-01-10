/*
structure of the jokes:
- Set up
- punch line
- twist
*/

// database
const jokeSections = {
    setUps() {
        const setUpsArr = [
            "Why don't scientists trust atoms?",
            "Why did the scarecrow win an award?",
            "How does a penguin build its house?",
            "What do you call fake spaghetti?",
            "Why did the bicycle fall over?",
            "What's orange and sounds like a parrot?",
            "How do you organize a space party?",
            "Why did the math book look sad?",
            "What do you call a fish with no eyes?",
            "Did you hear about the claustrophobic astronaut?"
        ];
        return setUpsArr.at(Math.floor(Math.random()*10));
    },
    punchLines() {
        const punchLinesArr = [
            "Because they make up everything!",
            "Because he was outstanding in his field!",
            "Igloos it together!",
            "An impasta!",
            "Because it was two-tired!",
            "A carrot!",
            "You planet!",
            "Because it had too many problems!",
            "Fsh!",
            "He just needed a little space!"
        ];
        return punchLinesArr.at(Math.floor(Math.random()*10));
    },
    twists() {
        const twistsArr = [
            "Including the jokes!",
            "His competition was corny.",
            "Ice-solation is the key.",
            "It's saucy how convincing it can be.",
            "It needed a break.",
            "It's a cleverly disguised vegetable.",
            "But make sure it's out of this world.",
            "But it needed to face them to improve.",
            "It's a deep-sea mystery.",
            "But not too much, or he'd feel boxed in."
        ];
        return twistsArr.at(Math.floor(Math.random()*10));
    }
};

// 


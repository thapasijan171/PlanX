const recentGreetings: Set<number> = new Set();
export const maxRecentGreetings = 8; // Number of recent greetings to track

const hoursLeft = 24 - new Date().getHours();

const greetingsText: string[] = [
  "Let's make today count! **1f680**",
  "Get things done and conquer the day!",
  "Embrace the power of productivity!",
  "Set your goals, crush them, repeat.",
  "Today is a new opportunity to be productive!",
  "Make every moment count.",
  "Stay organized, stay ahead.",
  "Take charge of your day!",
  "One task at a time, you've got this!",
  "Productivity is the key to success. **1f511**",
  "Let's turn plans into accomplishments!",
  "Start small, achieve big.",
  "Your focus determines your reality—stay productive!",
  "Success begins with a single step of productivity.",
  "Progress happens when you keep moving forward!",
  "Small actions lead to big results—let's get started!",
  "Consistency beats intensity—keep it productive!",
  "Stay disciplined and let productivity flow!",
  "Plan your day, execute with purpose.",
  "Believe in your ability to make today productive.",
  "Stay focused, stay productive, stay winning.",
  "Every task completed is a step toward success.",
  "The road to success is paved with productive moments.",
  "Make today count, you've got this!",
  "Stay ahead by staying organized.",
  "Crush your to-do list and own the day!",
  "Be efficient, be productive.",
  "Harness the power of productivity!",
  "Get ready to make things happen!",
  "It's time to check off those tasks! **2705**",
  "Start your day with a plan! **1f5d3-fe0f**",
  "Stay focused, stay productive.",
  "Unlock your productivity potential. **1f513**",
  "Turn your to-do list into a to-done list! **1f4dd**",
  `Have a wonderful ${new Date().toLocaleDateString("en", {
    weekday: "long",
  })}!`,
  `Happy ${new Date().toLocaleDateString("en", {
    month: "long",
  })}! A great month for productivity!`,
  hoursLeft > 4
    ? `${hoursLeft} hours left in the day. Use them wisely!`
    : `Only ${hoursLeft} hours left in the day`,
];

/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
  // Function to get a new greeting that hasn't been used recently
  const getUniqueGreeting = (): string => {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * greetingsText.length);
    } while (recentGreetings.has(randomIndex));

    // Update recent greetings
    recentGreetings.add(randomIndex);
    if (recentGreetings.size > maxRecentGreetings) {
      const firstEntry = Array.from(recentGreetings).shift();
      if (firstEntry !== undefined) {
        recentGreetings.delete(firstEntry);
      }
    }

    return greetingsText[randomIndex];
  };

  return getUniqueGreeting();
};

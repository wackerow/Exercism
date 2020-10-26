class Bob {
    isYelling(message: string): boolean {
        return message.toUpperCase() === message && message.toLowerCase() !== message;
    }

    isAskingQuestion(message: string): boolean {
        return message[message.length - 1] === '?';
    }

    isSilent(message: string): boolean {
        return message.length === 0;
    }

    hey(message: string): string {
        const trimmedMessage = message.trim();

        if (this.isSilent(trimmedMessage)) {
            return "Fine. Be that way!";
        }
        if (this.isYelling(trimmedMessage) && this.isAskingQuestion(trimmedMessage)) {
            return "Calm down, I know what I'm doing!";
        }
        if (this.isYelling(trimmedMessage)) {
            return "Whoa, chill out!";
        }
        if (this.isAskingQuestion(trimmedMessage)) {
            return "Sure.";
        }
        return "Whatever."
    }
}

export default Bob
export const easyCards = [
    { question: '\\int x\\,dx', answer: '\\frac{1}{2} x^2 + C' },
    { question: '\\frac{d}{dx} x^2', answer: '2x' },
    { question: '\\int dx', answer: 'x + C' },
    { question: '\\frac{d}{dx} \\sin(x)', answer: '\\cos(x)' },
    { question: '\\int x^2\\,dx', answer: '\\frac{1}{3}x^3 + C' },
    { question: '\\frac{d}{dx} \\cos(x)', answer: '-\\sin(x)' },
    { question: '\\int 3x^2\\,dx', answer: 'x^3 + C' },
    { question: '\\frac{d}{dx} e^x', answer: 'e^x' },
    { question: '\\int \\frac{1}{x}\\,dx', answer: '\\ln|x| + C' },
    { question: '\\frac{d}{dx} \\tan(x)', answer: '\\sec^2(x)' },
];

export const mediumCards = [
    { question: '\\int e^x\\,dx', answer: 'e^x + C' },
    { question: '\\frac{d}{dx} \\ln(x)', answer: '\\frac{1}{x}' },
    { question: '\\int \\cos(x)\\,dx', answer: '\\sin(x) + C' },
    { question: '\\frac{d}{dx} \\tan(x)', answer: '\\sec^2(x)' },
    { question: '\\int \\sec^2(x)\\,dx', answer: '\\tan(x) + C' },
    { question: '\\frac{d}{dx} e^{2x}', answer: '2e^{2x}' },
    { question: '\\int \\sin(x)\\cos(x)\\,dx', answer: '\\frac{1}{2}\\sin^2(x) + C' },
    { question: '\\int \\sec(x)\\tan(x)\\,dx', answer: '\\sec(x) + C' },
    { question: '\\frac{d}{dx} \\arcsin(x)', answer: '\\frac{1}{\\sqrt{1 - x^2}}' },
    { question: '\\int \\sqrt{x}\\,dx', answer: '\\frac{2}{3}x^{3/2} + C' },
    { question: '\\int 5e^x\\,dx', answer: '5e^x + C' },
];

export const hardCards = [
    { question: '\\int \\frac{1}{1 + x^2}\\,dx', answer: '\\arctan(x) + C' },
    { question: '\\frac{d}{dx} \\arccos(x)', answer: '-\\frac{1}{\\sqrt{1 - x^2}}' },
    { question: '\\int \\ln(x)\\,dx', answer: 'x \\ln(x) - x + C' },
    { question: '\\frac{d}{dx} x^x', answer: 'x^x (\\ln(x) + 1)' },
    { question: '\\int e^{x} \\sin(x)\\,dx', answer: '\\frac{1}{2} e^{x}(\\sin(x) - \\cos(x)) + C' },
    { question: '\\frac{d}{dx} \\ln|\\sec(x)|', answer: '\\tan(x)' },
    { question: '\\int \\tan(x)\\,dx', answer: '-\\ln|\\cos(x)| + C' },
    { question: '\\frac{d}{dx} \\sin(x)', answer: '\\cos(x)' },
    { question: '\\int \\cos(x)\\,dx', answer: '\\sin(x) + C' },
    { question: '\\frac{d}{dx} \\arctan(x)', answer: '\\frac{1}{1 + x^2}' },
    { question: '\\int \\sqrt{1 - x^2}\\,dx', answer: '\\frac{1}{2}x\\sqrt{1 - x^2} + \\frac{1}{2}\\arcsin(x) + C' },
    { question: '\\int \\frac{x}{\\sqrt{1 + x^2}}\\,dx', answer: '\\sqrt{1 + x^2} + C' },
    { question: '\\int \\frac{1}{x^2 + a^2}\\,dx', answer: '\\frac{1}{a}\\arctan(\\frac{x}{a}) + C' },
    { question: '\\int \\sin^2(x)\\,dx', answer: '\\frac{1}{2}x - \\frac{1}{4}\\sin(2x) + C' },
    { question: '\\int x^2e^x\\,dx', answer: 'e^x(x^2 - 2x + 2) + C' },
    { question: '\\int \\frac{1}{\\sqrt{x^2 - 1}}\\,dx', answer: '\\arccos(x) + C' },
    { question: '\\frac{d}{dx} \\arcsin(x)', answer: '\\frac{1}{\\sqrt{1 + x^2}}' },
];
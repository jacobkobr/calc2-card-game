export const easyCards = [
    { question: '\\int x\\,dx', answer: '\\frac{1}{2} x^2 + C' },
    { question: '\\frac{d}{dx} x^2', answer: '2x' },
    { question: '\\int dx', answer: 'x + C' },
    { question: '\\frac{d}{dx} \\sin(x)', answer: '\\cos(x)' },
];

export const mediumCards = [
    { question: '\\int e^x\\,dx', answer: 'e^x + C' },
    { question: '\\frac{d}{dx} \\ln(x)', answer: '\\frac{1}{x}' },
    { question: '\\int \\cos(x)\\,dx', answer: '\\sin(x) + C' },
    { question: '\\frac{d}{dx} \\tan(x)', answer: '\\sec^2(x)' },
    { question: '\\int \\sec^2(x)\\,dx', answer: '\\tan(x) + C' },
    { question: '\\frac{d}{dx} e^{2x}', answer: '2e^{2x}' },
];

export const hardCards = [
    { question: '\\int \\frac{1}{1 + x^2}\\,dx', answer: '\\arctan(x) + C' },
    { question: '\\frac{d}{dx} \\arccos(x)', answer: '-\\frac{1}{\\sqrt{1 - x^2}}' },
    { question: '\\int \\ln(x)\\,dx', answer: 'x \\ln(x) - x + C' },
    { question: '\\frac{d}{dx} x^x', answer: 'x^x (\\ln(x) + 1)' },
    { question: '\\int e^{x} \\sin(x)\\,dx', answer: '\\frac{1}{2} e^{x}(\\sin(x) - \\cos(x)) + C' },
    { question: '\\frac{d}{dx} \\ln|\\sec(x)|', answer: '\\tan(x)' },
    { question: '\\int \\tan(x)\\,dx', answer: '-\\ln|\\cos(x)| + C' },
    { question: '\\frac{d}{dx} \\sinh(x)', answer: '\\cosh(x)' },
];

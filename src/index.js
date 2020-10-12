module.exports = function toReadable(number) {
    const num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let out = '';
    if (number > 99) {
        out = `${num1[Math.floor(number / 100)]} hundred `;
        number = number - Math.floor(number / 100) * 100;
    }
    if (number > 19) {
        out += `${num2[Math.floor(number / 10) - 2]} `;
        number = number - Math.floor(number / 10) * 10;
        out += `${number === 0 ? '' : num1[number]} `;
    } else {
        out += `${(out && number === 0) ? '' : num1[number]}`;
    }
    return out.trim();
}

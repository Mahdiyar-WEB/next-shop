export default function toEnglishDigits(str) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    
    // Replace Persian digits with English digits
    for (let i = 0; i < persianDigits.length; i++) {
        const persianDigit = persianDigits[i];
        const englishDigit = i.toString();
        const regex = new RegExp(persianDigit, 'g');
        str = str.replace(regex, englishDigit);
    }
    
    return str;
}
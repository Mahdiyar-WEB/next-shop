export default function toPersianDigits(n){
    const farsiDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹","۱۰"]
    return n.toLocaleString().toString().replace(/\d/g,(x)=> farsiDigits[parseInt(x)]);
}
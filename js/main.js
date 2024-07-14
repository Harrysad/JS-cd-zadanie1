// Funkcja, która odwraca stringa
function reverseString(string) {
    // Konwersja stringa na tablicę, odwrócenie tablicy i połączenie jej z powrotem w stringa
    return string.split('').reverse().join('');
}

const reversedString = reverseString("Akademia108");
console.log(reversedString);


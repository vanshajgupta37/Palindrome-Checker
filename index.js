  function checkPalindrome() {
    var str = document.getElementById("inputString").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var isPalindrome = true;
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      document.getElementById("result").innerHTML = "'" + str + "' is a palindrome.";
    } else {
      document.getElementById("result").innerHTML = "'" + str + "' is not a palindrome.";
    }
    
    var randomFact = funFactsArray[Math.floor(Math.random() * funFactsArray.length)];
    document.getElementById("funFact").innerText = randomFact;
  }

  var funFactsArray = [
    "The word 'Palindrome' comes from the Greek words 'palin' (again) and 'dromos' (way, direction), meaning 'running back again'.",
    "The longest known palindrome in the English language is 'tattarrattat', coined by James Joyce in Ulysses.",
    "Palindrome sentences are called 'semordnilap', which is 'palindromes' spelled backward.",
    "The date 10-02-2001 is a numerical palindrome, meaning it reads the same forwards and backwards.",
    "Some famous palindromes are 'Madam, in Eden I'm Adam' and 'A man, a plan, a canal, Panama!'."
  ];
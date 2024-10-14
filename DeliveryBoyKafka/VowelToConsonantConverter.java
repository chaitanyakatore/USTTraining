public class VowelToConsonantConverter {

    private static char nextConsonant = 'b';

    public static void main(String[] args) {
        String input = "hello";
        String result = convertVowelsToConsonants(input);
        System.out.println(result);  // Output: hbllc
    }

    public static String convertVowelsToConsonants(String str) {
        StringBuilder result = new StringBuilder();
        for (char ch : str.toCharArray()) {
            if (isVowel(ch)) {
                result.append(nextConsonant());
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }

    public static boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }

    public static char nextConsonant() {
        char currentConsonant = nextConsonant;
        do {
            nextConsonant++;
            if (nextConsonant > 'z') {
                nextConsonant = 'b';
            }
        } while (isVowel(nextConsonant));
        return currentConsonant;
    }
}

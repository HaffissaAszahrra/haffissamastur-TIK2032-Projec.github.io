public class PinkTextExample {
    // ANSI escape code untuk warna pink (light magenta)
    public static final String ANSI_PINK = "\u001B[95m";
    public static final String ANSI_RESET = "\u001B[0m";

    public static void main(String[] args) {
        System.out.println(ANSI_PINK + "Hello, ini teks warna pink di terminal!" + ANSI_RESET);
    }
}

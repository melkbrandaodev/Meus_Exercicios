import java.util.Scanner;
public class ConversaoBinario {
	
	public static void main(String[] args) {
		int n = 0;
		Scanner entrada = new Scanner(System.in);
				System.out.print("Digite um n�mero decimal: ");
				 n = entrada.nextInt();
				 System.out.print("O n�mero decimal "+n+" ,convertido para bin�rio � ");
				
		decimalParaBinario(n);
		

	}
	

	private static void decimalParaBinario(int n) {
		if(n>0) {
			
			decimalParaBinario(n/2);
			System.out.print(n%2);
			
		}
		
	}
	
	
}

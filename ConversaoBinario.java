import java.util.Scanner;
public class ConversaoBinario {
	
	public static void main(String[] args) {
		int n = 0;
		Scanner entrada = new Scanner(System.in);
				System.out.print("Digite um número decimal: ");
				 n = entrada.nextInt();
				 System.out.print("O número decimal "+n+" ,convertido para binário é ");
				
		decimalParaBinario(n);
		

	}
	

	private static void decimalParaBinario(int n) {
		if(n>0) {
			
			decimalParaBinario(n/2);
			System.out.print(n%2);
			
		}
		
	}
	
	
}

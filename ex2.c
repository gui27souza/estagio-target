#include <stdio.h>

int fibonacci(int n) {

    if (n < 0) return 0;
    if (n == 0) return 1;

    int seq = 1;
    int ant = 0;
    int aux = 0;

    while (seq < n) {
        aux = seq;
        seq += ant;
        ant = aux;
    }

    if (seq == n) return 1;
    if (seq > n) return 0;

}

int main() {

    printf("Digite um inteiro para verificar se ele pertence a sequencia de fibonacci: ");

    int entrada;
    scanf("%d", &entrada);

    int saida;
    saida = fibonacci(entrada);

    printf("O numero %d esta presente na sequencia de fibonacci? %s\n", entrada, saida? "true" : "false");

    return 0;
}
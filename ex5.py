entrada = input("Digite uma string: ")

saida = []

for i in range(len(entrada)):
    saida.append(entrada[-(i + 1)])

print("String invertida: " + "".join(saida))
from socket import *

serverPort = 13000

serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind(("", serverPort))
serverSocket.listen(1)

print("The server is ready to receive")
while True:
    connectionSocket, addr = serverSocket.accept()
    print(connectionSocket, "!!!!")
    message = connectionSocket.recv(2048)
    modifiedMessage = message.decode().upper()
    connectionSocket.send(modifiedMessage.encode())
    connectionSocket.close()

import qrcode



imagem = qrcode.make("Transferido com sucesso!")
imagem.save("QrTransfer.jpg")
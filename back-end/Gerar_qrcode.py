import qrcode



imagem = qrcode.make("Pago com sucesso!")
imagem.save("Qrcode.jpg")
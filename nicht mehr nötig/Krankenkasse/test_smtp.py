import smtplib

smtp_server = 'smtp.gmx.net'
port = 587
username = 'lunatestmail@gmx.ch'
password = 'IcLiVaDo1'

try:
    server = smtplib.SMTP(smtp_server, port)
    server.starttls()  # TLS aktivieren
    server.login(username, password)
    print("Login erfolgreich")
except Exception as e:
    print(f"Fehler beim Verbinden: {e}")
finally:
    server.quit()
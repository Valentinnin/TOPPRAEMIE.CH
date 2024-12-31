from flask import Flask, render_template, request, redirect, flash, url_for
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'palworld'

# Flask-Mail Konfiguration
app.config['MAIL_SERVER'] = 'smtp.gmx.net'  # SMTP-Server (z.B. Gmail: smtp.gmail.com)
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'lunatestmail@gmx.ch'
app.config['MAIL_PASSWORD'] = 'IcLiVaDo1'
app.config['MAIL_DEFAULT_SENDER'] = 'lunatestmail@gmx.ch'
app.config['MAIL_DEBUG'] = True

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/krankenkasse')
def krankenkasse():
    return render_template('Krankenkasse.html')  # Zeigt das HTML-Formular an

@app.route('/rechtschutz')
def rechtschutz():
    return render_template('Rechtsschutz.html')

@app.route('/autoversicherung')
def autoversicherung():
    return render_template('Autoversicherung.html')

@app.route('/haushaltsversicherung')
def hausvers():
    return render_template('Haushaltsversicherung.html')

@app.route('/wertsachenversicherung')
def wertvers():
    return render_template('Wertsachenversicherung.html')

@app.route('/reiseversicherung')
def reisevers():
    return render_template('Reiseversicherung.html')

@app.route('/tierversicherung')
def tiervers():
    return render_template('Tierversicherung.html')

@app.route('/vorsorge3a3b')
def vorsorgevers():
    return render_template('Vorsorge3a3b.html')

@app.route('/steuererklärung')
def steuererklärung():
    return render_template('Steuererklärung.html')

@app.route('/erfolg')
def erfolg():
    return render_template('erfolg.html')

@app.route('/send-email', methods=['POST'])
def send_email():
    # Formular-Daten erfassen
    vorname = request.form.get('vorname-beratung')  # Name/Vorname
    geburtsdatum = request.form.get('geburtsdatumberatung')  # Geburtsdatum
    plz = request.form.get('plz-beratung')  # Postleitzahl
    email = request.form.get('email-beratung')  # E-Mail-Adresse
    telefon = request.form.get('tel-beratung')  # Telefonnummer
    krankenkasse = request.form.get('kk-beratung')  # Krankenkasse
    wo_beraten = request.form.get('wo-beraten')  # Beratungsart (online, Telefon, vor Ort)
    thema = request.form.get('thema-beratung')  # Beratungsthema

# Debugging-Ausgabe: Ausgabe der empfangenen Daten in der Konsole
    print(f"Formulardaten: Vorname: {vorname}, Geburtsdatum: {geburtsdatum}, PLZ: {plz}, E-Mail: {email}, Telefon: {telefon}, Krankenkasse: {krankenkasse}, Beratungsart: {wo_beraten}, Thema: {thema}")

    # E-Mail vorbereiten
    msg = Message(f'Neue Nachricht von {vorname}',
                  recipients=['lunatestmail@gmx.ch'])  # Deine E-Mail-Adresse
    msg.body = f"""
    Neue Krankenkassen-Beratungsanfrage:

    Vorname / Name: {vorname}
    Geburtsdatum: {geburtsdatum}
    PLZ: {plz}
    E-Mail: {email}
    Telefonnummer: {telefon}
    Krankenkasse: {krankenkasse}
    Beratungstyp (wie beraten): {wo_beraten}
    Thema der Anfrage: {thema}

    Bitte bearbeite diese Anfrage so schnell wie möglich.
    """

    try:
        # E-Mail senden
        mail.send(msg)
        flash('Die Nachricht wurde erfolgreich gesendet.', 'success')
        print('E-Mail erfolgreich gesendet.')
        return redirect(url_for('erfolg'))
                        
    except Exception as e:
        print(f'Fehler beim Senden der E-Mail: {e}')
        flash(f'Fehler beim Senden der Nachricht: {str(e)}', 'danger')

if __name__ == '__index__':
    app.run(debug=True)

@app.route('/send-email-second', methods=['POST'])
def send_email_second():
    # Formular-Daten des zweiten Formulars erfassen
    vorname = request.form.getlist('offerteName[]')  # Name/Vorname (aus dem zweiten Formular)
    geburtsdatum = request.form.getlist('offerteGebDatum[]')  # Geburtsdatum (zweites Formular)
    plz = request.form.get('offertePlz')  # Postleitzahl (zweites Formular)
    email = request.form.get('offerteEmail')  # E-Mail-Adresse (zweites Formular)
    telefon = request.form.get('offerteTel')  # Telefonnummer (zweites Formular)
    krankenkasse = request.form.getlist('offerteKK[]')
    wieberaten = request.form.get('offerteBeratung')
    welchesthema = request.form.getlist('offerteThemaBeratung[]')
    stundearbeitprotag = request.form.get('8harbeit')
    franchise = request.form.get('franchise')
    modell = request.form.get('modell')
    datumzuzug = request.form.get('datumzuzug')
    wichtigeLeistungen = request.form.getlist('wichtigeLeistungen[]')
    gewKK = request.form.getlist('gewKK[]')
    wunsch = request.form.get('wunsch')
    zusatzinfo = request.form.get('zusatzinfo')
    
    

    # Debugging-Ausgabe: Ausgabe der empfangenen Daten in der Konsole
    print(f"Formulardaten (zweites Formular): Vorname: {vorname}, Geburtsdatum: {geburtsdatum}, PLZ: {plz}, E-Mail: {email}, Telefon: {telefon}, Krankenkassen: {', '.join(krankenkasse)},")

    # E-Mail vorbereiten
    msg = Message(f'Neue Offertenanfrage von {vorname}',
                  recipients=['lunatestmail@gmx.ch'])  # Deine E-Mail-Adresse
    msg.body = f"""
    Neue Krankenkassen-Offertenanfrage:

    Vorname / Name: {vorname}
    Geburtsdatum: {geburtsdatum}
    PLZ: {plz}
    E-Mail: {email}
    Telefonnummer: {telefon}
    Krankenkassen: {krankenkasse}
    Beratung bitte per: {wieberaten}
    Thema der Beratung: {welchesthema}
    Arbeitet mehr als 8 Stunden {stundearbeitprotag}
    Gewüschte Franchise: {franchise}
    Gewünschtes Modell: {modell}
    Neu in der Schweiz seit: {datumzuzug}
    Wichtige Leistungen: {wichtigeLeistungen}
    Gewünschte Kranenkassen: {gewKK}
    Das wünsche ich mir: {wunsch}
    Das möchte ich noch Mitteilen: {zusatzinfo}

    Bitte bearbeite diese Anfrage so schnell wie möglich.
    """

    try:
        # E-Mail senden
        mail.send(msg)
        flash('Die Nachricht wurde erfolgreich gesendet.', 'success')
        print('E-Mail erfolgreich gesendet (zweites Formular).')
    except Exception as e:
        print(f'Fehler beim Senden der E-Mail: {e}')
        flash(f'Fehler beim Senden der Nachricht: {str(e)}', 'danger')

    return redirect(url_for('erfolg'))
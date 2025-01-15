from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'palworld'  # für Flash-Nachrichten

# Konfiguration für Flask-Mail
app.config['MAIL_SERVER'] = 'mail.gmx.net'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'lunatestmail@gmx.ch'
app.config['MAIL_PASSWORD'] = 'IcLiVaDo1'
app.config['MAIL_DEFAULT_SENDER'] = 'lunatestmail@gmx.ch'

mail = Mail(app)


@app.route('/')
def index():
    return render_template('index.html')
@app.route('/krankenkasse')
def krankenkasse():
    return render_template('krankenkasse.html')
@app.route('/erfolg')
def erfolg():
    return render_template('erfolg.html')
@app.route('/misserfolg')
def misserfolg():
    return render_template('misserfolg.html')
@app.route('/haushaltsversicherung')
def haushaltsvers():
    return render_template('haushaltsvers.html')
@app.route('/wertsachenversicherung')
def wertsachvers():
    return render_template('wertsachvers.html')
@app.route('/rechtsschutz')
def rechtsvers():
    return render_template('rechtsvers.html')
@app.route('/autoversicherung')
def autovers():
    return render_template('autovers.html')
@app.route('/reiseversicherung')
def reisevers():
    return render_template('reisevers.html')
@app.route('/tierversicherung')
def tiervers():
    return render_template('tiervers.html')
@app.route('/vorsorge')
def vorsorgevers():
    return render_template('vorsorgevers.html')
@app.route('/steuererklaerung')
def steuererklärung():
    return render_template('steuererklärung.html')
@app.route('/impres')
def impres():
    return render_template('impres.html')
@app.route('/datenschutz')
def datenschutz():
    return render_template('datenschutz.html')
@app.route('/nutzungsbed')
def nutzungsbed():
    return render_template('nutzungsbed.html')

# Route für das Versenden der E-Mail KK Beratung
@app.route('/send_email', methods=['POST'])
def send_email():
    if request.method == 'POST':
        name = request.form['nameBeratung']
        geburtsdatum = request.form['gebDateBeratung']
        ortplz = request.form['ortPlzBeratung']
        email = request.form['emailBeratung']
        tel = request.form['telBeratung']
        kk = request.form['kk-beratung']
        wieberaten = request.form['beratungsweiseBeratung']

        # Erstellen der E-Mail-Nachricht
        msg = Message("Neue Nachricht vom Formular",
                      recipients=['lunatestmail@gmx.ch'])
        msg.body = f"""
        Eine Anfrage für einen Beratungstermin
            Name: {name}
            Gebdatum: {geburtsdatum}
            Ort / PLZ: {ortplz}
            Email: {email}
            Telefonnummer: {tel}
            Aktuelle Krankenkasse: {kk}
            Beratung per: {wieberaten}
        """
        
        # Senden der E-Mail
        try:
            mail.send(msg)
            return redirect(url_for('erfolg')) 
        except Exception as e:
            flash(f"Fehler beim Senden der E-Mail: {e}", "error")
            return redirect(url_for('misserfolg'))

# Route für das zweite Formular KK Offerte
@app.route('/send_email_form2', methods=['POST'])
def send_email_form2():
    if request.method == 'POST':
        name = request.form.getlist('nameOfferte[]')
        gebdate = request.form.getlist('gebDateOfferte[]')
        ortplz = request.form.get('ortPlzOfferte')
        email = request.form.get('emailOfferte')
        tel = request.form.get('telOfferte')
        aktuKK = request.form.getlist('aktuelleKKOfferte[]')
        thema = request.form.getlist('themaOfferte[]')
        achtStdArbeit = request.form.get('8StdArbeit')
        gewFranchise = request.form.get('gewFranchiseOfferte')
        gewModell = request.form.get('gewModellOfferte')
        gemeindeAnmeldung = request.form.get('gemeindeAnmeldung')
        leistungen = request.form.getlist('wichtigeLeistungen')
        gewKK = request.form.getlist('gewKrankenkasse')
        mirWichtig = request.form.get('mirWichtigOfferte')
        message = request.form.get('mitteilung')

        msg = Message("Nachricht von Formular 2",
                      recipients=['lunatestmail@gmx.ch'])
        msg.body = f"""
        Eine Anfrage für eine Offerte
        Name: {name}
        Geburtsdatum:{gebdate}
        Ort / PLZ: {ortplz}
        Email: {email}
        Telefonnummer:{tel}
        Aktuelle Krankenkasse: {aktuKK}
        Thema der Offerte: {thema}
        Arbeitet mehr als 8 Stunden: {achtStdArbeit}
        Gewünschte Franchise: {gewFranchise}
        Gewünschtes Modell: {gewModell}
        Nur Neuzuzügler, wann bei der Gemeinde angemeldet:{gemeindeAnmeldung}
        Wichtige Leistungen: {', '.join(leistungen)}
        Gewünschte Krankenkasse(n): {', '.join(gewKK)}
        Das ist mir wichtig: {mirWichtig}
        Sonstige Mitteilung: {message}

        """

        try:
            mail.send(msg)
            return redirect(url_for('erfolg')) 
        except Exception as e:
            flash(f"Fehler beim Senden der E-Mail: {e}", "error")
            return redirect(url_for('misserfolg'))

# Route für das Versenden der E-Mail Recthsschutz Singel
@app.route('/send_email_rechtsschutzsingel', methods=['POST'])
def send_email_rechtsschutzs():
    if request.method == 'POST':
        name = request.form['nameRSS']
        geburtsdatum = request.form['gebDateRSS']
        strhausnr = request.form['strasseHausNrRSS']
        ortplz = request.form['ortPlzRSS']
        email = request.form['emailRSS']
        tel = request.form['telRSS']
        gesellschaft = request.form.get('selectGesellschaftRSS', 'Keine')
        aktRSK = request.form['aktuelleRSKS']

        # Erstellen der E-Mail-Nachricht
        msg = Message("Neue Nachricht vom Formular",
                      recipients=['lunatestmail@gmx.ch'])
        msg.body = f"""
        Eine Anfrage für einen Rechtschutzofferte für eine Person
            Name: {name}
            Gebdatum: {geburtsdatum}
            Strasse / Hausnummer: {strhausnr}
            Ort / PLZ: {ortplz}
            Email: {email}
            Telefonnummer: {tel}
            Aktuelle Rechtsschutzversicherung: {gesellschaft}
            Aktuelle Rechtsstreitigkeit: {aktRSK}
        """
        
        # Senden der E-Mail
        try:
            mail.send(msg)
            return redirect(url_for('erfolg')) 
        except Exception as e:
            flash(f"Fehler beim Senden der E-Mail: {e}", "error")
            return redirect(url_for('misserfolg'))
        
# Route für das Versenden der E-Mail Recthsschutz Multiple
@app.route('/send_email_rechtsschutzmulti', methods=['POST'])
def send_email_rechtsschutzm():
    if request.method == 'POST':
        name = request.form['nameRSM']
        geburtsdatum = request.form['gebDateRSM']
        strhausnr = request.form['strasseHausNrRSM']
        ortplz = request.form['ortPlzRSM']
        email = request.form['emailRSM']
        tel = request.form['telRSM']
        gesellschaft = request.form.get('selectGesellschaftRSM', 'Keine')
        aktRSK = request.form['aktuelleRSKM']

        # Erstellen der E-Mail-Nachricht
        msg = Message("Neue Nachricht vom Formular",
                      recipients=['lunatestmail@gmx.ch'])
        msg.body = f"""
        Eine Anfrage für einen Rechtschutzofferte für mehrere Personen
            Name: {name}
            Gebdatum: {geburtsdatum}
            Strasse / Hausnummer: {strhausnr}
            Ort / PLZ: {ortplz}
            Email: {email}
            Telefonnummer: {tel}
            Aktuelle Rechtsschutzversicherung: {gesellschaft}
            Aktuelle Rechtsstreitigkeit: {aktRSK}
        """
        
        # Senden der E-Mail
        try:
            mail.send(msg)
            return redirect(url_for('erfolg')) 
        except Exception as e:
            flash(f"Fehler beim Senden der E-Mail: {e}", "error")
            return redirect(url_for('misserfolg'))

if __name__ == '__main__':
    app.run(debug=True)
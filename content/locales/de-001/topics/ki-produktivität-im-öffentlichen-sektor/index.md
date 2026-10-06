# KI-Produktivität im öffentlichen Sektor

Kennzahlen dafür, was KI-Codierungsunterstützung tatsächlich mit dem technischen Output macht —
Vorschlagsannahmeraten, kontrollierte-Studien-Beschleunigungen, PR-Durchsatz und Coderetention —
tragen eine wirklich widersprüchliche Evidenzgrundlage, noch bevor Beschränkungen des öffentlichen
Sektors hinzukommen: Datenklassifizierung begrenzt, welche Teile eines Legacy-Bestands ein
KI-Werkzeug überhaupt berühren darf, Beschaffungszyklen bedeuten, dass das evaluierte Werkzeug oft
eine Modellgeneration hinter der aktuellen Fähigkeit liegt, und Sicherheitsüberprüfungsanforderungen
regeln, wer es wofür nutzen darf.

## Warum das wichtig ist

Die zwei am häufigsten zitierten kontrollierten Studien zeigen in entgegengesetzte Richtungen. Peng
et al.'s GitHub-Copilot-RCT von 2023 fand, dass Entwicklerinnen und Entwickler eine
Greenfield-HTTP-Server-Aufgabe mit Copilot 55,8 % schneller abschlossen (1 Std. 11 Min. vs. 2 Std.
41 Min., n=95). METRs RCT von 2025 fand, dass erfahrene Open-Source-Entwicklerinnen und -Entwickler,
die an *ihren eigenen ausgereiften Repositories* arbeiteten, mit KI-Werkzeugen von Anfang 2025 19 %
langsamer waren, während sie glaubten, etwa 20 % schneller zu sein. Beide Studien sind solide; der
Widerspruch ist der Befund — Wirksamkeit bei Greenfield-Aufgaben überträgt sich nicht auf
Wirksamkeit bei ausgereiften Codebasen, und ein Großteil der technischen Arbeit in der Regierung ist
Arbeit an ausgereiften Codebasen auf Beständen, die älter und eigenwilliger sind als das mittlere
kommerzielle Repository. Das Generative-AI-Framework für HMG des Central Digital and Data Office
(2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) legt Prinzipien
für verantwortungsvolle Übernahme fest, genau weil diese Evidenzgrundlage nicht einfach aus
Anbieterdemonstrationen importiert werden kann; von Ministerien wird erwartet, Werkzeuge gegen ihre
eigenen Datenumgangs- und Sicherheitsanforderungen zu evaluieren, bevor sie ausgerollt werden.

## Die Berechnung

```
Annahmerate       = angenommene Vorschläge / gezeigte Vorschläge
Retentionsrate     = bis zum Merge überlebender KI-Code / angenommener
                      KI-Code
Beschleunigung     = (t_Kontrolle − t_KI) / t_Kontrolle (NUR aus
                      kontrolliertem Vergleich)
Durchsatzdelta     = Δ gemergte PRs/Entwickler/Woche

Faktor der Abdeckung im öffentlichen Sektor:
  anspruchsberechtigter Codebasis-Anteil = Codezeilen auf Systemen,
    bei denen die Klassifizierung (OFFICIAL, OFFICIAL-SENSITIVE,
    SECRET) das Werkzeug überhaupt erlaubt

Wertmodell = Entwickelnde × anspruchsberechtigte Abdeckung ×
             eingesparte Zeit × belasteter Satz × Auslastung
             — jeder Term braucht lokale Messung, und der
             Abdeckungsfaktor hat kein privatwirtschaftliches
             Äquivalent
```

## Beispielrechnung

Ein Ministerium pilotiert einen KI-Codierungsassistenten über 300 Entwicklerinnen und Entwickler,
aber nur als OFFICIAL klassifizierte Systeme sind für die Werkzeugnutzung anspruchsberechtigt — 70 %
des Bestands nach Personalzuteilung, wobei die verbleibenden 30 % (höher klassifizierte Systeme)
vollständig ausgeschlossen sind.

```
Anspruchsberechtigte Entwickelnde = 300 × 0,70 = 210

Pilotergebnis: selbstberichtete eingesparte Zeit 40 Min./Tag;
               gemessene Einsparung auf Aufgabenebene 12 Min./Tag
               (0,2 Std.) — die METR-Wahrnehmungslücke, in der
               Praxis reproduziert

Die GEMESSENE Zahl bewerten:
  210 × 0,2 Std. × 220 Tage × 55 £/Std. belastet × 0,6 Auslastung
  = 210 × 44 Stunden × 55 £ × 0,6
  = 9.240 Stunden × 55 £ × 0,6 ≈ 304.920 £/Jahr Kapazität

Kosten: 210 lizenzierte Plätze × 22 £/Monat × 12 ≈ 55.440 £/Jahr

Netto-Kapazitätsverhältnis ≈ 304.920 / 55.440 ≈ 5,5:1
```

Finanzierbar bei etwa einem Drittel des selbstberichteten Nutzens, und nur nachdem die
Klassifizierungsobergrenze angewendet wird — alle 300 Entwickelnden auf Grundlage der
selbstberichteten Zahl zu lizenzieren, hätte sowohl die anspruchsberechtigte Population als auch
die wahre Einsparung überzeichnet.

## Bezug zur Softwareentwicklung

Die direkt übertragbaren Disziplinen: **pragmatische Versuche** auf der eigenen Codebasis und den
echten Tickets des Ministeriums durchführen, nicht Anbieterdemonstrationsaufgaben, weil das
METR-Ergebnis spezifisch ein Befund für ausgereifte Codebasen ist; **Annahmerate als
Stellvertreter, nicht als Ergebnis** behandeln — hohe Annahme bei niedriger Retention ist das
Software-Äquivalent zu Überdiagnose; jede Durchsatzbehauptung mit einer **Stabilitätsprüfung**
paaren, da der DORA-Bericht 2025 fand, dass KI-Übernahme den Durchsatz hebt, aber die
Änderungsstabilität verschlechtert — genau die Nettonutzen-Analyse, für die
[DORA-Metriken für öffentlichen Wert](../dora-metriken-für-öffentlichen-wert/) gebaut sind; und ehrlich
sein, dass KI-Werkzeuge die Lücke bei [technische-Schulden](../technische-schulden-als-erosion-öffentlichen-werts/)-lastigen
Legacy-Beständen vergrößern, nicht verkleinern können, weil Trainingsdaten COBOL, 4GL und
maßgeschneiderten Mainframe-Code, wie er in der Regierung häufig ist, unterrepräsentieren, sodass
die Vorschlagsqualität genau bei den Systemen, die am meisten Hilfe brauchen, oft am schwächsten
ist. Dies steht neben der breiteren Frage des [Werts von KI in der Regierung](../wert-von-ki-in-der-regierung/)
und sollte denselben [Cybersicherheits](../cybersicherheitswert-im-öffentlichen-sektor/)-Beschränkungen
unterliegen, die begrenzen, wo überhaupt ein Drittanbieter-Werkzeug Code oder Daten sehen darf.

## Fallstricke

- **Anbieterstudien-Übertragung**: Greenfield-RCT-Beschleunigungen auf Legacy-Integrationsarbeit
  anzuwenden, ist genau der Fehler, den die METR-Studie aufdeckte.
- **Selbstbericht als Messung**: Eine Wahrnehmungs-vs.-gemessen-Lücke von 20 Prozentpunkten ist die
  größte bekannte Verzerrung in dieser Literatur, und sie bläht Business Cases auf, die sich allein
  auf Entwicklerumfragen stützen.
- **Die Klassifizierungsobergrenze ignorieren**: Lizenz- und Wertmodelle, aufgebaut auf der
  Gesamtpersonalstärke statt der anspruchsberechtigten, sicherheitsüberprüften Teilmenge,
  überzeichnen systematisch sowohl Kosten-Wirksamkeit als auch erreichbare Abdeckung.
- **Beschaffungszyklus-Verzögerung**: Rahmenvertragsbasierte Werkzeugbeschaffung kann bedeuten,
  dass ein Pilotprojekt eine Modellgeneration evaluiert, die zum Zeitpunkt des vollständigen
  Rollouts 12–18 Monate hinter dem öffentlich Verfügbaren liegt, was die
  Beschleunigungsannahme des ursprünglichen Business Case vor dem Livegang veralten lässt.

## Quellen

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
